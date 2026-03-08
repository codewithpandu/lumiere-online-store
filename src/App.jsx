import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";
import { CartTab } from "./components/CartTab";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:slug" element={<DetailProduct />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <CartTab />
    </BrowserRouter>
  );
}

export default App;
