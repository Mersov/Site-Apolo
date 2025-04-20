import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FaleConosco from "../../presentation/pages/Fale-conosco/fale-conosco";
import Home from "../../presentation/pages/home/home";
import NossosAutos from "../../presentation/pages/Nossos-autos/nossos-autos";
import SobreNos from "../../presentation/pages/Sobre-nos/sobre-nos";
import NavBarFactory from "../factories/components/NavBar";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavBarFactory>
              <Home />
            </NavBarFactory>
          }
        />
        <Route
          path="/nossos-autos"
          element={
            <NavBarFactory>
              <NossosAutos />
            </NavBarFactory>
          }
        />
        <Route
          path="/fale-conosco"
          element={
            <NavBarFactory>
              <FaleConosco />
            </NavBarFactory>
          }
        />
        <Route
          path="/sobre-nos"
          element={
            <NavBarFactory>
              <SobreNos />
            </NavBarFactory>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
