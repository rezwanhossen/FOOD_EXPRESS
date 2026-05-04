import ReviewSkeleton from "@/component/skeleton/ReviewsSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="py-28 px-5 ">
      <h1 className="text-4xl font-bold mb-5"></h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[...Array(12)].map((_, index) => (
          <ReviewSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReviewLoading;
