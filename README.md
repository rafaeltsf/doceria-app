# Doceria Açúcar & Afeto — MVP

SPA em React (Vite) para o catálogo e carrinho da doceria.

## Como rodar
```bash
npm install
npm run dev
```

## Estrutura
```
src/
├── components/   Header, ProductList, ProductCard, Cart
├── context/      CartContext (Dia 2)
├── data/         produtos.json (10 doces)
└── styles/       index.css
```

## Wireframe (baixa fidelidade)

Mobile:
```
+-------------------------+
|  Doceria Açúcar & Afeto |
+-------------------------+
| [img]  Brigadeiro       |
|        descrição  R$3,50|
|        [Adicionar]      |
| [img]  Beijinho ...     |
+-------------------------+
| SEU CARRINHO            |
| (vazio)         Total   |
+-------------------------+
```
Desktop:
```
+---------------------------------------------+
|           Doceria Açúcar & Afeto            |
+----------------------------+----------------+
| [card] [card] [card]       |  Seu carrinho  |
| [card] [card] [card]       |  itens / qtd   |
| [card] [card] [card]       |  Total         |
+----------------------------+----------------+
```

## Checklist
- [x] Dia 1: setup, produtos.json, estrutura e componentes base
- [ ] Dia 2: CartContext, lógica do carrinho, CSS e responsividade
- [ ] Dia 3: pitch
