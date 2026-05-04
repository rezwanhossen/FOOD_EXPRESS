import React, { useState } from "react";
import { ThumbsUp, Star, Calendar } from "lucide-react";

const ReviewsCard = ({ review }) => {
  // Like state
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(review.likes?.length || 0);

  // Date format
  const formattedDate = new Date(review.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Handle Like Toggle
  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-orange-100 bg-gray-50">
            <img
              src={review.photo}
              alt={review.user}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="font-black text-slate-900 text-lg leading-tight">
              {review.user}
            </h4>

            <div className="flex items-center gap-2 text-gray-400 text-xs mt-1 font-bold">
              <Calendar size={12} className="text-orange-500" />
              {formattedDate}
            </div>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-xl">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < review.rating
                  ? "fill-orange-500 text-orange-500"
                  : "text-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <div className="mb-8 flex-grow">
        <p className="text-slate-700 leading-relaxed font-medium text-base line-clamp-4">
          {review.review}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
        <div className="flex -space-x-2">
          {review.likes?.slice(0, 3).map((likeEmail, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600 uppercase"
            >
              {likeEmail.charAt(0)}
            </div>
          ))}

          {review.likes?.length > 3 && (
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
              +{review.likes.length - 3}
            </div>
          )}
        </div>

        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-xs shadow-sm transition-all duration-300 active:scale-95
            ${
              liked
                ? "bg-orange-500 text-white"
                : "bg-gray-50 text-slate-600 hover:bg-orange-100"
            }
          `}
        >
          <ThumbsUp size={16} />
          {likesCount} Likes
        </button>
      </div>
    </div>
  );
};

export default ReviewsCard;
