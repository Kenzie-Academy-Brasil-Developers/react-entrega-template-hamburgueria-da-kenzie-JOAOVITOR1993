import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../contexts/CartContext";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
 
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route element={<CartProvider/>}>
        <Route path="/home" element={<Home/>} />
      </Route>
      <Route path="*" element={<Login/>} />
    </Routes>
  );
};
