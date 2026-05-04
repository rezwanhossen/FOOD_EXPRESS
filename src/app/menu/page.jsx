import FoodCard from "@/component/cards/FoodCard";
import React from "react";
import CartItem from "./CartItem";
import InputSearch from "@/component/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};
const ManuPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);

  return (
    <div className=" py-28 px-5 min-h-screen bg-white/80">
      <div className="md:flex justify-between items-center my-2 ">
        <h1 className="flex-1 text-4xl font-bold mb-5 text-black ">
          Total <span className=" text-orange-500">{foods.length}</span> Foods
          Found{" "}
        </h1>
        <div className="flex-1 ">
          <InputSearch />
        </div>
      </div>
      <div className="md:flex gap-5">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="md:w-3/12 rounded-xl border-orange-400 border-2">
          <h2 className="text-2xl font-bold p-3 text-black">Card items</h2>
          <hr className="text-orange-400" />
          <CartItem></CartItem>
        </div>
      </div>
    </div>
  );
};

export default ManuPage;
