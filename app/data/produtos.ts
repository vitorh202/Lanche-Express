export type Produto = {
  nome: string;
  img: string;
  ingredientes: string[];
  preco: string;
};

export const produtos: Record<string, Produto[]> = {
  lanches: [
    {
      nome: "X-Burger",
      img: "/images/xburger.jpg",
      ingredientes: ["Pão", "Carne", "Queijo", "Alface", "Tomate"],
      preco: "R$ 15,90",
    },
    {
      nome: "X-Bacon",
      img: "/images/bacon.jpg",
      ingredientes: ["Pão", "Carne", "Bacon", "Queijo", "Molho especial"],
      preco: "R$ 18,90",
    },
  ],
  Poções: [
    {
      nome: "Batata frita simples",
      img: "/images/batata.jpg",
      ingredientes: ["Batata frita"],
      preco: "R$ 9,90",
    },
    {
      nome: "Batata frita recheada",
      img: "/images/batata2.jpg",
      ingredientes: ["Batata frita", "Calabresa", "Bacon", "Queijo", "Chedder"],
      preco: "R$ 38,90",
    },
  ],
  bebidas: [
    {
      nome: "Coca-Cola",
      img: "/images/coca.jpg",
      ingredientes: ["Refrigerante"],
      preco: "R$ 6,00",
    },
    {
      nome: "Suco Natural",
      img: "/images/suco.jpg",
      ingredientes: ["Frutas naturais"],
      preco: "R$ 8,00",
    },
  ],
};

export default produtos;
