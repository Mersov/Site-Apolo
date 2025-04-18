import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import HB20 from "../../pages/carros/hb20";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Certifique-se de que o componente Home está funcionando corretamente */}
        <Route path="/" element={<Home />} />
        <Route path="/hb20" element={<HB20 />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
