const itensCardapio = [
  {
    nome: "X-Burguer",
    preco: 18.90,
    categoria: "Lanche"
  },
  {
    nome: "X-Bacon",
    preco: 21.90,
    categoria: "Lanche"
  },
  {
    nome: "Combo Família",
    preco: 45.90,
    categoria: "Combo"
  }
];

const lista = document.getElementById("lista-cardapio");

if (lista) {
  lista.innerHTML = "";

  itensCardapio.forEach(item => {
    const produto = document.createElement("div");
    produto.className = "produto";

    produto.innerHTML = `
      <h3>${item.nome}</h3>
      <p>Categoria: ${item.categoria}</p>
      <p>R$ ${item.preco.toFixed(2).replace(".", ",")}</p>
      <button>Pedir</button>
    `;

    lista.appendChild(produto);
  });
}