// Versão estática (sem lógica) só para montar o layout.
// TODO (Dia 2): ler itens do CartContext, quantidade, subtotal e total.
export default function Cart() {
  return (
    <aside className="cart" aria-label="Carrinho de compras">
      <h2>Seu carrinho</h2>
      <p>Seu carrinho está vazio.</p>
      <div className="cart__total">
        <span>Total</span>
        <strong>R$ 0,00</strong>
      </div>
    </aside>
  )
}
