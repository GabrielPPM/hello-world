import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "paginas/Post";
import NotFound from "paginas/NotFound";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio/>}/>
          <Route path="sobre-mim" element={<SobreMim/>}/>
        </Route>
        <Route path="posts/:id" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
