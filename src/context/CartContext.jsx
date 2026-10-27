import { createContext, useContext, useEffect, useState } from 'react'
import produtos from '../data/produtos.json'

const CHAVE_STORAGE = 'doceria-carrinho'
const CartContext = createContext(null)

// O estado guarda só { id, quantidade }. Nome, preço e imagem vêm sempre do
// produtos.json, então o carrinho nunca fica com dados desatualizados.
function carregarCarrinhoSalvo() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE))
    return Array.isArray(salvo) ? salvo : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [linhas, setLinhas] = useState(carregarCarrinhoSalvo)

  // Persiste o carrinho para sobreviver a um F5.
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(linhas))
  }, [linhas])

  // Se o produto já está no carrinho, soma a quantidade; senão, cria a linha.
  // Sempre devolve novos arrays/objetos (sem mutação direta do estado).
  function adicionarItem(id) {
    setLinhas((atual) => {
      const existe = atual.some((linha) => linha.id === id)
      if (existe) {
        return atual.map((linha) =>
          linha.id === id ? { ...linha, quantidade: linha.quantidade + 1 } : linha
        )
      }
      return [...atual, { id, quantidade: 1 }]
    })
  }

  function aumentarQuantidade(id) {
    adicionarItem(id)
  }

  // Ao chegar em 0, a linha sai do carrinho.
  function diminuirQuantidade(id) {
    setLinhas((atual) =>
      atual
        .map((linha) =>
          linha.id === id ? { ...linha, quantidade: linha.quantidade - 1 } : linha
        )
        .filter((linha) => linha.quantidade > 0)
    )
  }

  function removerItem(id) {
    setLinhas((atual) => atual.filter((linha) => linha.id !== id))
  }

  function limparCarrinho() {
    setLinhas([])
  }

  // Valores derivados: não ficam em useState, são calculados a cada render.
  const itens = linhas
    .map((linha) => {
      const produto = produtos.find((p) => p.id === linha.id)
      return produto
        ? { ...produto, quantidade: linha.quantidade, subtotal: produto.preco * linha.quantidade }
        : null
    })
    .filter(Boolean)

  const total = itens.reduce((soma, item) => soma + item.subtotal, 0)
  const quantidadeTotal = itens.reduce((soma, item) => soma + item.quantidade, 0)

  const valor = {
    itens,
    total,
    quantidadeTotal,
    adicionarItem,
    aumentarQuantidade,
    diminuirQuantidade,
    removerItem,
    limparCarrinho,
  }

  return <CartContext.Provider value={valor}>{children}</CartContext.Provider>
}

export function useCart() {
  const contexto = useContext(CartContext)
  if (!contexto) {
    throw new Error('useCart deve ser usado dentro de um <CartProvider>')
  }
  return contexto
}
