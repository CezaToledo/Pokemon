
import Layout from "./Modules/Layout";
import Home from "./Modules/home/home";
import Detlhes from "./Modules/detalhes/Detalhes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home/>} path={"/"} />
          <Route element={<Detlhes/>} path={"detalhes/:id"}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
