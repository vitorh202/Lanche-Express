'use client'

import { useState } from "react";
import { produtos} from "../data/produtos"

export default function Pedido() {
  const [quantidades, setQuantidades] = useState<Record<string, number>>({});
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");

  const handleChangeQuantidade = (categoria: keyof typeof produtos, index: number, valor: string) => {
    setQuantidades({
      ...quantidades,
      [`${categoria}-${index}`]: Number(valor),
    });
  };

  const calcularTotal = () => {
    let total = 0;
    Object.keys(produtos).forEach((categoria) => {
      produtos[categoria].forEach((produto, index) => {
        const quantidade = quantidades[`${categoria}-${index}`] || 0;
        const precoNumerico = Number(produto.preco.replace("R$", "").replace(",", "."));
        total += quantidade * precoNumerico;
      });
    });
    return total.toFixed(2);
  };

  const gerarMensagemWhatsApp = () => {
    let mensagem = `*Pedido*:\nNome: ${nome}\nEndereço: ${endereco}\nForma de Pagamento: ${pagamento}\n\n`;
    
    Object.keys(produtos).forEach((categoria) => {
      mensagem += `*${categoria}*:\n`;
      produtos[categoria].forEach((produto, index) => {
        const quantidade = quantidades[`${categoria}-${index}`] || 0;
        if (quantidade > 0) {
          mensagem += `- ${produto.nome} (x${quantidade})\n`;
        }
      });
    });

    mensagem += `\nTotal: R$ ${calcularTotal()}`;
    return encodeURIComponent(mensagem);
  };

  const enviarPedido = () => {
    if (!nome || !endereco || !pagamento || calcularTotal() === "0.00") {
      alert("Por favor, preencha todos os campos e escolha algo antes de pedir!");
      return;
    }

    const numeroWhatsApp = "554999999999"; // Substitua pelo número do cliente
    const mensagem = gerarMensagemWhatsApp();
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="w-full">
        <h1 className="text-4xl font-bold mt-3">Faça seu Pedido</h1>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen">
        {Object.keys(produtos).map((categoria) => (
          <div key={categoria} className="w-full max-w-2xl mt-6 text-center">
            <h2 className="text-2xl font-semibold text-orange-500">{categoria}</h2>
            {produtos[categoria].map((produto, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <span className="text-lg">{produto.nome} - {produto.preco}</span>
                <input
                  type="number"
                  min="0"
                  value={quantidades[`${categoria}-${index}`]}
                  onChange={(e) => handleChangeQuantidade(categoria, index, e.target.value)}
                  className="w-16 text-center border rounded ml-4"
                />
              </div>
            ))}
          </div>
        ))}

        <h3 className="text-2xl font-bold mt-6">Total: R$ {calcularTotal()}</h3>

        {/* Campos de Nome, Endereço e Forma de Pagamento */}
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border rounded py-2 px-4 mt-4 w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          className="border rounded py-2 px-4 mt-4 w-full max-w-md"
        />
        <select
          value={pagamento}
          onChange={(e) => setPagamento(e.target.value)}
          className="border rounded py-2 px-4 mt-4 w-full max-w-md"
        >
          <option value="">Selecione a forma de pagamento</option>
          <option value="Pix">Pix</option>
          <option value="Cartão">Cartão</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>

        <button
          onClick={enviarPedido}
          className="bg-green-500 text-white py-2 px-6 rounded mt-6 hover:bg-green-600"
        >
          Fazer Pedido
        </button>
        <button
          onClick={() => window.location.href = "/cardapio"}
          className="bg-orange-500 text-white py-2 px-6 rounded mt-4 hover:bg-orange-600 transition"
        >
          Voltar para o Cardápio
        </button>
      </div>

      <footer className="w-full">
        <p>&copy; 2025 Lanche Express - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

