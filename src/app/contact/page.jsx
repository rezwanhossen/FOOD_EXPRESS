import React from "react";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a question about our menu, catering services, or a recent
            order? Our team is here to help you 24/7.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                      Call Us
                    </p>
                    <p className="font-semibold">+880 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                      Email Us
                    </p>
                    <p className="font-semibold">hello@foodexpress.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                      Visit Us
                    </p>
                    <p className="font-semibold">
                      Road 12, Gulshan-2, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                      Working Hours
                    </p>
                    <p className="font-semibold">
                      Mon - Sun: 09:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full md:w-max px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 uppercase text-sm tracking-widest">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 mb-24">
        <div className="container mx-auto h-[50vh] bg-gray-100 rounded-[3rem] overflow-hidden relative shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.000000000000!2d90.4125!3d23.7925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzMzLjAiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
            className="w-full h-full border-0 grayscale contrast-125"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
