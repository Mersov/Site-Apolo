export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4">
      <h2 className="text-2xl font-semibold mb-4">Bem-vindo à nossa loja!</h2>
      <p className="text-lg text-gray-700 mb-6">
        Encontre os melhores carros com os melhores preços.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
        Ver Catálogo
      </button>
    </div>
  );
}
