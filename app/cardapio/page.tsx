"use client";
import { useState } from "react";
import Image from "next/image";
import "./cardapio.css";
import produtos from "../data/produtos";

export default function Cardapio() {
  const [categoria, setCategoria] = useState("lanches");
  const [index, setIndex] = useState(0);

  const itens = produtos[categoria];

  const prevItem = () => setIndex(index === 0 ? itens.length - 1 : index - 1);
  const nextItem = () => setIndex(index === itens.length - 1 ? 0 : index + 1);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1 className="text-4xl font-bold">Nosso Cardápio 🍔</h1>
        <p className="text-lg mt-4">Confira todas as delícias disponíveis!</p>
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        {/* Categorias */}
        <div className="flex gap-4 mb-6">
          {Object.keys(produtos).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-2 rounded-md font-bold ${
                categoria === cat ? "bg-orange-500 text-white" : "bg-gray-300"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Área de Exibição */}
        <div className="flex items-center gap-6">
          <button onClick={prevItem} className="text-3xl">
            &#9664;
          </button>

          <div className="flex flex-col items-center text-center transition-opacity duration-500">
            <div
              className={"flex flex-col items-center text-center"}
            >
              <Image
                src={itens[index].img}
                alt={itens[index].nome}
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
            </div>
            <h2 className="text-xl font-bold mt-2">{itens[index].nome}</h2>
            <ul className="mt-2 text-gray-600">
              {itens[index].ingredientes.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <p className="mt-2 text-lg font-bold text-orange-500">
              {itens[index].preco}
            </p>
          </div>

          <button onClick={nextItem} className="text-3xl">
            &#9654;
          </button>
        </div>

        {/* Pedido */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            Já escolheu? Faça seu pedido agora!
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-orange-600" onClick={() => window.location.href = "/pedido"}>
            Pedir Agora
          </button>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 Lanche Express - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
