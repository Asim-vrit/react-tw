import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Footer() {
  const { setCartData } = useContext(CartContext);
  return (
    <div className="mt-auto bg-amber-300 flex justify-center p-4">
      Footer
      <button
        onClick={() => {
          setCartData([]);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Footer;
