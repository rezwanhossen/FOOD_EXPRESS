"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartProvider";

const NavShopping = () => {
  const context = useContext(CartContext);

  // safety check
  if (!context) {
    return null;
  }

  const { cart } = context;
  console.log(cart);
  return <span>{cart.length}</span>;
};

export default NavShopping;
