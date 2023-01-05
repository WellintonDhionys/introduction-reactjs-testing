import { Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Products } from '../pages/Products';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default MainRoutes;