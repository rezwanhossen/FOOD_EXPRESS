import React from "react";
import { Eye, Star } from "lucide-react";
import Link from "next/link";
import MenuCartButton from "../buutton/MenuCartButton";

const FoodCard = ({ food }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      <div className="relative h-64 w-full rounded-4xl overflow-hidden bg-gray-100 shrink-0">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star size={14} className="fill-orange-500 text-orange-500" />
          <span className="text-xs font-bold text-slate-800">4.8</span>
        </div>
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          {food.category}
        </div>
      </div>

      <div className="mt-6 px-2 pb-2 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 min-h-14">
          <h3 className="text-xl font-black text-slate-900 leading-tight line-clamp-2">
            {food.title}
          </h3>
          <span className="text-orange-600 font-black text-xl ml-2 whitespace-nowrap">
            ৳{food.price}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-2 min-h-10">
          Authentic {food.title} prepared with fresh ingredients and traditional
          spices.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/menu/${food.id}`}
            className="flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-xs transition-all active:scale-95 whitespace-nowrap"
          >
            <Eye size={16} /> Details
          </Link>
          <MenuCartButton food={food} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
