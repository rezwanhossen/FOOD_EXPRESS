"use client";
import { CartContext } from "@/context/CartProvider";
import { ShoppingCart } from "lucide-react";
import React, { use, useState } from "react";

const MenuCartButton = ({ food }) => {
  const [inCart, setIncart] = useState(false);
  const { addToCart } = use(CartContext);
  const handeladdtocart = () => {
    addToCart(food);
    setIncart(true);
  };
  return (
    <button
      onClick={handeladdtocart}
      disabled={inCart}
      className="flex items-center justify-center gap-2 py-3 disabled:bg-orange-800 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-xs transition-all shadow-lg shadow-orange-500/20 active:scale-95 whitespace-nowrap"
    >
      {inCart ? (
        "Added"
      ) : (
        <>
          <ShoppingCart size={16} />
          Add
        </>
      )}
    </button>
  );
};

export default MenuCartButton;
