"use client";
import { CartContext } from "@/context/CartProvider";
import { Heading1, ShoppingCart } from "lucide-react";
import React, { use } from "react";

const CartItem = () => {
  const { cart } = use(CartContext);
  return (
    <div className="p-3 ">
      <p className="flex gap-1 text-orange-600">
        <ShoppingCart /> {cart.length} Items added
      </p>
      <div>
        {cart.map((ca) => (
          <div
            className=" border-2 p-2 rounded-md my-4  text-orange-600 "
            key={ca.id}
          >
            <div className=" flex gap-3">
              <img className=" w-20 h-20 rounded-md" src={ca.foodImg} alt="" />
              <div>
                <h1 className="text-xl font-bold text-black">{ca.title}</h1>
                <p className=" text-orange-400"> ৳{ca.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
