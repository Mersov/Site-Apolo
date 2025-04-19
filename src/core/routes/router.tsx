import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import NossosAutos from "../../pages/home/nossos-autos";
import FaleConosco from "../../pages/home/fale-conosco";
import SobreNos from "../../pages/home/sobre-nos";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossos-autos" element={<NossosAutos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
