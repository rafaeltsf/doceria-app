import { useCart } from '../context/CartContext.jsx'
import { formatarPreco } from '../utils/formatarPreco.js'

export default function CartItem({ item }) {
  const { aumentarQuantidade, diminuirQuantidade, removerItem } = useCart()

  return (
    <li className="cart-item">
      <img src={item.imagem} alt="" />
      <div className="cart-item__info">
        <strong>{item.nome}</strong>
        <span className="cart-item__unit">{formatarPreco(item.preco)} cada</span>
        <div className="qty">
          <button
            type="button"
            aria-label={`Diminuir quantidade de ${item.nome}`}
            onClick={() => diminuirQuantidade(item.id)}
          >
            −
          </button>
          <span aria-live="polite">{item.quantidade}</span>
          <button
            type="button"
            aria-label={`Aumentar quantidade de ${item.nome}`}
            onClick={() => aumentarQuantidade(item.id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item__side">
        <strong>{formatarPreco(item.subtotal)}</strong>
        <button type="button" className="link-btn" onClick={() => removerItem(item.id)}>
          Remover
        </button>
      </div>
    </li>
  )
}
