import produtos from '../data/produtos.json'
import ProductCard from './ProductCard.jsx'

export default function ProductList() {
  return (
    <section className="product-list" aria-label="Vitrine de doces">
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </section>
  )
}
