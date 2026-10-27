import { useCart } from '../context/CartContext.jsx'
import { formatarPreco } from '../utils/formatarPreco.js'

export default function ProductCard({ produto }) {
  const { id, nome, descricao, preco, imagem } = produto
  const { itens, adicionarItem } = useCart()

  const noCarrinho = itens.find((item) => item.id === id)

  return (
    <article className="product-card">
      <img src={imagem} alt={nome} loading="lazy" />
      <div className="product-card__info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <div className="product-card__footer">
          <strong>{formatarPreco(preco)}</strong>
          <button type="button" className="btn" onClick={() => adicionarItem(id)}>
            {noCarrinho ? `Adicionar mais (${noCarrinho.quantidade})` : 'Adicionar'}
          </button>
        </div>
      </div>
    </article>
  )
}
