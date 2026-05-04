import FoodSkeleton from "@/component/skeleton/FoodSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="bg-white/80 py-32 px-5">
      <div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(12)].map((_, index) => (
            <FoodSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
