import React from "react";

import {
  ShoppingCart,
  PlayCircle,
  MapPin,
  Tag,
  ArrowLeft,
  CheckCircle2,
  Globe,
} from "lucide-react";
import Link from "next/link";

const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.details;
  } catch (error) {
    return null;
  }
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Food Not Found
        </h1>
        <Link
          href="/menu"
          className="text-orange-500 font-bold flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-32">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors mb-10 font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={18} /> Back to explore
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl shadow-orange-500/10 border-8 border-gray-50">
              <img
                src={food.foodImg}
                alt={food.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Area Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-50">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">
                  Origin
                </p>
                <p className="font-bold text-slate-900">{food.area}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Info Section */}
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <span className="px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 w-max">
                <Tag size={14} /> {food.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              {food.title}
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl font-black text-orange-600">
                ৳{food.price}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-xs font-bold uppercase">
                In Stock
              </span>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 pb-10 border-b border-gray-100">
              Experience the authentic taste of our {food.title}. A perfect
              blend of {food.area} culinary tradition and fresh ingredients.
              This dish is prepared with 100% organic components and
              chef-special seasoning.
            </p>

            {/* Technical Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <CheckCircle2 className="text-orange-500" /> Free Delivery
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <CheckCircle2 className="text-orange-500" /> Organic Only
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 uppercase text-sm tracking-widest active:scale-95">
                <ShoppingCart size={20} /> Add to Order
              </button>

              {food.video && (
                <a
                  href={food.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest active:scale-95"
                >
                  <PlayCircle size={20} /> Watch Recipe
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
