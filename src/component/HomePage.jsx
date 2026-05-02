"use client";
import React, { useEffect, useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import FoodCard from "./cards/FoodCard";
import Link from "next/link";

const HomePage = () => {
  const [foods, setFood] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch(
          "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
        );
        const data = await res.json();
        setFood(data.foods);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-600">
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">
                Free Delivery on first order
              </span>
              <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
                Savor the Best <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Flavors in Town
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Experience gourmet dining at home. We bring fresh, chef-made
                meals straight to your doorstep within 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
                  Order Now <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl font-bold transition-all flex items-center justify-center">
                  Explore Menu
                </button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">4.8/5</span> from
                  10k+ happy foodies
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -z-10 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-60 -top-20 -right-20"></div>
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000"
                  alt="Main Dish"
                  className="rounded-[2.5rem] shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Delivery Time</p>
                    <p className="font-bold">25 - 30 Mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-slate-900 text-white">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-400 text-sm mt-1">Cuisines</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">120+</h3>
              <p className="text-gray-400 text-sm mt-1">Restaurants</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
              <p className="text-gray-400 text-sm mt-1">Support</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">100%</h3>
              <p className="text-gray-400 text-sm mt-1">Hygienic</p>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold">In the Mood for?</h2>
              <p className="text-gray-500 mt-2">
                Explore our most ordered categories
              </p>
            </div>
            <button className="text-orange-600 font-semibold flex items-center gap-1 hover:underline mt-4 md:mt-0">
              View All Categories <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Burgers", "Sushi", "Italian", "Healthy", "Steak"].map(
              (cat, i) => (
                <div
                  key={cat}
                  className="group bg-gray-50 hover:bg-white hover:shadow-xl p-8 rounded-3xl text-center border border-transparent hover:border-orange-100 transition-all cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    🍔
                  </div>
                  <h3 className="font-bold text-gray-800">{cat}</h3>
                </div>
              )
            )}
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Signature Dishes</h2>
              <p className="text-gray-500">
                Hand-picked by our top chefs to ensure you get the best
                experience possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {foods?.slice(10, 18).map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
          <div className="mt-15 text-center">
            <Link
              href="/menu"
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl "
            >
              See All Foods
            </Link>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-orange-500 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Don't Miss Out on Discounts!
                </h2>
                <p className="text-orange-100 mb-10 max-w-lg mx-auto">
                  Subscribe to our newsletter and get 20% off your first order.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-2xl text-gray-900 outline-none"
                  />
                  <button className="bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-2xl font-bold transition-all">
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-400 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
