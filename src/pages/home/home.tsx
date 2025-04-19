export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-purple-800 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-6xl  font-bold">Logo</h1>
        <nav>
          <ul className="flex space-x-6 list-none text-lg font-semibold">
            <li>
              <a href="/" className="text-white hover:text-gray-300 mx-6">
                Início
              </a>
            </li>
            <li>
              <a href="/nossos-autos" className="houver:text-gray-300 mx-6">
                Nossos Autos
              </a>
            </li>
            <li>
              <a href="/fale-conosco" className="hover:text-gray-300 mx-6">
                Fale Conosco
              </a>
            </li>

            <li>
              <a
                href="/sobre-nos"
                className="text-white hover:text-gray-300 mx-6"
              >
                Sobre Nós
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <h2 className="text-2xl font-semibold mb-4">Bem-vindo à nossa loja!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Encontre os melhores carros com os melhores preços.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
          Ver Catálogo
        </button>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Loja de Carros. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
