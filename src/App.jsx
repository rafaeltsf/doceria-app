import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

// DIA 1: apenas a estrutura. A lógica do carrinho entra no Dia 2.
export default function App() {
  return (
    <>
      <Header />
      <main className="layout">
        <ProductList />
        <Cart />
      </main>
    </>
  )
}
