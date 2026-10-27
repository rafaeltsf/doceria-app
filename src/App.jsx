import { useState } from 'react'
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { useCart } from './context/CartContext.jsx'
import { formatarPreco } from './utils/formatarPreco.js'

export default function App() {
  // No celular o carrinho abre como uma gaveta; no desktop fica sempre visível.
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const { quantidadeTotal, total } = useCart()

  return (
    <>
      <Header />
      <main className="layout">
        <ProductList />
        <Cart aberto={carrinhoAberto} onFechar={() => setCarrinhoAberto(false)} />
      </main>

      <button
        type="button"
        className="cart-toggle"
        aria-expanded={carrinhoAberto}
        onClick={() => setCarrinhoAberto(true)}
      >
        Ver carrinho ({quantidadeTotal}) · {formatarPreco(total)}
      </button>

      {carrinhoAberto && (
        <div className="backdrop" onClick={() => setCarrinhoAberto(false)} />
      )}
    </>
  )
}
