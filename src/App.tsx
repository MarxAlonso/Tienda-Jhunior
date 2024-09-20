import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductosPage } from "./pages/ProductosPage/ProductosPage";
//import { ContactoPage } from "./pages/ContactoPage/ContactoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ropas" element={<ProductosPage />}></Route>
        {/*<Route path="/contacto" element={<ContactoPage />}></Route>*/}
      </Routes>
    </>
  );
}

export default App;
