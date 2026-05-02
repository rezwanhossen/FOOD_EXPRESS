import React from "react";

import { Mail, Phone, MapPin, Send } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Food<span className="text-orange-500">Express</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Bringing the world’s best cuisines to your doorstep. Fresh
              ingredients, chef-made meals, and lightning-fast delivery since
              2024.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-500 hover:text-white rounded-lg transition-all"
              >
                {/* <InstagramIcon size={20} /> */}
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-500 hover:text-white rounded-lg transition-all"
              >
                {/* <FacebookIcon size={20} /> */}
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-500 hover:text-white rounded-lg transition-all"
              >
                {/* <TwitterIcon size={20} /> */}
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Today's Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Support & Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>123 Foodie Street, Kitchen City, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>support@foodexpress.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-sm mb-4">
              Get the latest recipes and discount codes.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 outline-none focus:border-orange-500 transition-all text-sm"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all">
                <Send size={16} />
              </button>
            </form>
            <p className="text-[10px] text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of
              Service.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 FoodExpress. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
          <div className="flex gap-4">
            {/* Payment Icons Placeholder */}
            <div className="h-6 w-10 bg-slate-900 rounded opacity-50 border border-slate-800"></div>
            <div className="h-6 w-10 bg-slate-900 rounded opacity-50 border border-slate-800"></div>
            <div className="h-6 w-10 bg-slate-900 rounded opacity-50 border border-slate-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
