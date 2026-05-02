import FoodCard from "@/component/cards/FoodCard";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};
const ManuPage = async () => {
  const foods = await getFoods();

  return (
    <div className=" py-28 px-5 min-h-screen bg-white/80">
      <h1 className="text-4xl font-bold mb-5 text-black ">
        Total <span className=" text-orange-500">{foods.length}</span> Foods
        Found{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default ManuPage;
