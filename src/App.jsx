import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";
import AppLayout from "./AppLayout";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route path="shop/:productId" element={<ProductDetail />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
