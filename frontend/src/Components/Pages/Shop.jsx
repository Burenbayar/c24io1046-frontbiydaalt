import React from "react";
import Mycard from "../Card/product";

const Shop = ({ cart, setCart }) => {
  return (
    <div>   <Mycard cart={cart} setCart={setCart} /></div>
  )
};

export default Shop;
