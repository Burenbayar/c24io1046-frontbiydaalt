import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/reset.css";
import { Layout } from "antd";
import AppHeader from "./Components/navbar/Header";
import AppContent from "./Components/navbar/Content";
import AppFooter from "./Components/navbar/Footer";
import { CartProvider } from "./Components/Pages/CartContext";
import "./index.css"

const App = () => {
  const [cart, setCart] = useState([]); 
 
  return (
    <CartProvider >
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader cart={cart} /> 
        <AppContent cart={cart} setCart={setCart} /> 
        <AppFooter />
      </Layout>
    </Router>
    </CartProvider>
  );
};

export default App;
