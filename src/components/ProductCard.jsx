// Componente de apresentação: recebe os dados do produto por props.
// TODO (Dia 2): ligar o botão ao CartContext.
export default function ProductCard({ produto }) {
  const { nome, descricao, preco, imagem } = produto

  return (
    <article className="product-card">
      <img src={imagem} alt={nome} loading="lazy" />
      <div className="product-card__info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>R$ {preco.toFixed(2).replace('.', ',')}</strong>
        <button type="button">Adicionar ao carrinho</button>
      </div>
    </article>
  )
}
