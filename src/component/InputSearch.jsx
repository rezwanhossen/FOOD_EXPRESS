"use client";
import React from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    const newparams = new URLSearchParams(params.toString());
    newparams.set("search", value);
    router.push(`?${newparams.toString()}`);
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="relative flex items-center group"
      >
        <div className="absolute left-5 text-gray-400 group-focus-within:text-orange-500 transition-colors">
          <Search size={20} />
        </div>

        <input
          type="text"
          placeholder="Search your favorite menu..."
          name="search"
          className="w-full pl-12 pr-10 py-5 bg-white border border-gray-100 rounded-[2rem] shadow-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-700 font-medium placeholder:text-gray-400"
        />

        <button
          type="submit"
          className="absolute right-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20 active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
