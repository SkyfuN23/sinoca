import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Panel from "./pages/Panel";
import Carga from "./pages/Carga";
import Retiro from "./pages/Retiro";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/carga" element={<Carga />} />'
        <Route path="/retiro" element={<Retiro />} />'
      </Routes>
    </BrowserRouter>
  );
}

export default App;