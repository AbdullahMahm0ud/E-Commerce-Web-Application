import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { Tracking } from "./pages/Tracking";
import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then(function resp(response) {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
