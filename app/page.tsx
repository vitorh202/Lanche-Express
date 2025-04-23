import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1>Bem-vindo ao Lanche Express!</h1>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center flex-grow gap-8 mt-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://files.menudino.com/cardapios/69388/logo.png"
            alt="Imagem da empresa"
            className="max-w-[350px] rounded-md shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-center">
          <section className="about">
            <h2 className="text-orange-500 text-3xl font-bold">Sobre Nós</h2>
            <p className="text-lg mt-3">
              O melhor delivery de lanches da cidade! Ingredientes frescos,
              sabor incomparável e entrega rápida.
            </p>
            <p className="mt-2">Faça seu pedido e aproveite!</p>
          </section>

          <div className="btns flex flex-col md:flex-row gap-4 mt-6 mb-6">
            <Link href="/cardapio" className="order-btn">
              Cardápio
            </Link>
            <Link href="/pedido" className="order-btn">
              Faça seu Pedido
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Lanche Express - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
