import { useCart } from '../context/CartContext.jsx'
import { formatarPreco } from '../utils/formatarPreco.js'
import { montarLinkWhatsApp } from '../utils/whatsapp.js'
import CartItem from './CartItem.jsx'

export default function Cart({ aberto, onFechar }) {
  const { itens, total, limparCarrinho } = useCart()
  const vazio = itens.length === 0

  return (
    <aside className={`cart ${aberto ? 'cart--open' : ''}`} aria-label="Carrinho de compras">
      <div className="cart__head">
        <h2>Seu carrinho</h2>
        <button type="button" className="link-btn cart__close" onClick={onFechar}>
          Fechar
        </button>
      </div>

      {vazio ? (
        <p className="cart__empty">
          Seu carrinho está vazio. Escolha um doce na vitrine para começar.
        </p>
      ) : (
        <ul className="cart__list">
          {itens.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      <div className="cart__total">
        <span>Total</span>
        <strong>{formatarPreco(total)}</strong>
      </div>

      {vazio ? (
        <button type="button" className="btn btn--wide" disabled>
          Finalizar pedido
        </button>
      ) : (
        <>
          <a
            className="btn btn--wide"
            href={montarLinkWhatsApp(itens, total)}
            target="_blank"
            rel="noreferrer"
          >
            Finalizar pedido pelo WhatsApp
          </a>
          <button type="button" className="link-btn cart__clear" onClick={limparCarrinho}>
            Esvaziar carrinho
          </button>
        </>
      )}
    </aside>
  )
}
