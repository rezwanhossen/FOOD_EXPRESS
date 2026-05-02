import React from "react";
import { ShoppingCart, User, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = ({ userImage = null }) => {
  return (
    <nav className="fixed w-11/12 mx-auto z-100 bg-white/10 backdrop-blur-lg border-b border-white/10 py-4">
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-black"
          >
            FOOD<span className="text-orange-500">EXPRESS</span>
          </Link>
        </div>

        <div className="hidden md:flex text-black items-center space-x-8 text-sm font-medium">
          <Link
            href="/menu"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/reviews"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/about"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          <button className="relative text-black hover:text-orange-500 transition-colors">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white/20">
              0
            </span>
          </button>

          <div className="relative">
            {userImage ? (
              <>
                {/* 1. Hidden Checkbox for Toggle Logic */}
                <input
                  type="checkbox"
                  id="user_dropdown"
                  className="hidden peer"
                />

                {/* 2. User Avatar (Acts as a button via Label) */}
                <label
                  htmlFor="user_dropdown"
                  className="block w-10 h-10 rounded-full border-2 border-orange-500 overflow-hidden cursor-pointer shadow-lg active:scale-95 transition-all"
                >
                  <img
                    src={userImage}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </label>

                {/* 3. Dropdown Menu (Controlled by Peer State) */}
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 hidden peer-checked:block animate-in fade-in zoom-in-95 duration-200 z-[100]">
                  <div className="p-2">
                    {/* Dashboard Link */}
                    <Link
                      href="/#"
                      className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
                    >
                      Dashboard
                    </Link>

                    <hr className="my-1 border-gray-50" />

                    {/* Logout Button */}
                    <button className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                      Logout
                    </button>
                  </div>
                </div>

                {/* 4. Invisible Overlay to Close Dropdown (Optional) */}
                <label
                  htmlFor="user_dropdown"
                  className="fixed inset-0 h-full w-full cursor-default hidden peer-checked:block z-[-1]"
                ></label>
              </>
            ) : (
              /* Login Button if not logged in */
              <Link
                href="/#"
                className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-500/20"
              >
                <User size={16} /> Login
              </Link>
            )}
          </div>

          <label
            htmlFor="menu-toggle"
            className="md:hidden cursor-pointer text-black flex items-center"
          >
            <Menu size={28} />
          </label>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className="hidden peer-checked:block md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-300">
        <div className="flex flex-col p-8 space-y-5 text-white font-semibold">
          <Link
            href="/menu"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/reviews"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/about"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
