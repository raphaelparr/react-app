import React from "react";
import App from "../App";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li id={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
