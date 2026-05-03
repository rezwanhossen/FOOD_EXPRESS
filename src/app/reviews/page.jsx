"use client";
import ReviewsCard from "@/component/cards/ReviewsCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading />;
  }
  return (
    <div className="py-28 px-5 min-h-screen bg-white/80">
      <h1 className="text-4xl font-bold mb-5 text-black ">
        Total <span className=" text-orange-500">{reviews.length}</span> Reviews
        Found
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((review) => (
          <ReviewsCard key={review.id} review={review}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
