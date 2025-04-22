import "./page.css";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Bem-vindo ao Lanche Express!</h1>
      </header>

      <div className="container">
        <section className="about">
          <h2>Sobre Nós</h2>
          <p>
            O melhor delivery de lanches da cidade! Ingredientes frescos, sabor
            incomparável e entrega rápida.
          </p>
          <p>Faça seu pedido e aproveite!</p>
        </section>

        <div className="btns">
          <a href="#" className="order-btn">
            Cardápio
          </a>
          <a href="#" className="order-btn">
            Faça seu Pedido
          </a>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Lanche Express - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
