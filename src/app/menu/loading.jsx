import FoodSkeleton from "@/component/skeleton/FoodSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="bg-white/80 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {[...Array(12)].map((_, index) => (
          <FoodSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default loading;
