export default function NavBar() {
  return (
    <header className="w-full bg-purple-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Logo</h1>
      <nav>
        <ul className="flex space-x-6 list-none text-lg font-semibold">
          <li>
            <a href="/" className="hover:text-gray-300">
              Início
            </a>
          </li>
          <li>
            <a href="/nossos-autos" className="hover:text-gray-300">
              Nossos Autos
            </a>
          </li>
          <li>
            <a href="/fale-conosco" className="hover:text-gray-300">
              Fale Conosco
            </a>
          </li>
          <li>
            <a href="/sobre-nos" className="hover:text-gray-300">
              Sobre Nós
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
