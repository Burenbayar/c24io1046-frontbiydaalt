import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AHeader from "./Components/navbar/Header";
import AContent from "./Components/navbar/Content";
import AFooter from "./Components/navbar/Footer";
import { CartProvider } from "./Components/Pages/CartContext";
import "./index.css"

const App = () => {
  const [cart, setCart] = useState([]); 
 
  return (
    <CartProvider >
    <Router>
      <div style={{ minHeight: "100vh" }}>
        <AHeader cart={cart} /> 
        <AContent cart={cart} setCart={setCart} /> 
        <AFooter />
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
