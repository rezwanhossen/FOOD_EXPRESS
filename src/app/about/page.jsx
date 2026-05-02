import React from "react";
import { Target, Users, ShieldCheck, ChefHat, Star } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative py-32 bg-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-90">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Fine dining restaurant atmosphere"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange/60 to-slate-700"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 mt-10">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a small kitchen experiment to the city's favorite food
            destination. We believe great food starts with passion and ends with
            a smile.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block p-3 bg-orange-100 text-orange-600 rounded-2xl mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-black mb-6">
              Driven by <span className="text-orange-500">Quality</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 italic font-medium">
              "We don't just cook; we create experiences."
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our goal is to redefine delivery. By focusing on sustainable
              sourcing and high-heat retention packaging, we ensure your steak
              or pasta feels exactly like it was just served at our chef's
              table.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Fresh Sourced
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-2xl font-bold">30 Mins</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Avg. Delivery
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000"
              className="rounded-[3rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              alt="Fresh gourmet pasta being prepared"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What Our <span className="text-orange-500">Foodies</span> Say
            </h2>
            <p className="text-gray-500">
              Don't just take our word for it. Join thousands of happy customers
              who enjoy the FoodExpress experience every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Food Blogger",
                comment:
                  "The quality of the ingredients is unmatched. Their truffle pasta arrived hot and tasted like it was served right in a 5-star restaurant!",
                rating: 4,
                img: "https://i.pravatar.cc/150?u=sarah",
              },
              {
                name: "James Wilson",
                role: "Fitness Coach",
                comment:
                  "I love their 'Healthy' category. Clean, organic food that actually tastes amazing. The delivery is always on time, which is a huge plus.",
                rating: 5,
                img: "https://i.pravatar.cc/150?u=james",
              },
              {
                name: "Elena Rodriguez",
                role: "Software Engineer",
                comment:
                  "Best customer service I've experienced. One time an item was missing, and they fixed it within 15 minutes. Truly professional!",
                rating: 4,
                img: "https://i.pravatar.cc/150?u=elena",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={`${
                        index < review.rating
                          ? "fill-orange-500 text-orange-500"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100 group-hover:border-orange-500 transition-colors">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-200">
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900">4.9/5</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mt-2">
                Average Rating
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900">50k+</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mt-2">
                Happy Customers
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900">120+</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mt-2">
                Expert Chefs
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900">15+</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mt-2">
                Awards Won
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1000"
                className="rounded-[3rem] shadow-xl group-hover:rotate-1 transition-transform"
                alt="Professional chef plating food"
              />
              <div className="absolute -top-6 -left-6 bg-orange-500 text-white p-6 rounded-3xl shadow-xl">
                <ChefHat size={40} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-6">
              Our <span className="text-orange-500">Hospitality</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At FoodExpress, we believe service is an art. Our chefs are
              artists, and our delivery team are our ambassadors. We treat your
              food with the respect it deserves.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="mt-1 bg-orange-100 p-3 rounded-xl text-orange-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Friendly Delivery Partners
                  </h4>
                  <p className="text-sm text-gray-500">
                    Every partner is trained in hygiene and customer
                    communication to provide a 5-star experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 bg-orange-100 p-3 rounded-xl text-orange-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Safety First Culture
                  </h4>
                  <p className="text-sm text-gray-500">
                    Double-sealed packaging and temperature checks are mandatory
                    for every order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
