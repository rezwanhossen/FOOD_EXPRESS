import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-32 animate-pulse">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="h-8/10 bg-gray-200 rounded-[3rem]"></div>
          <div className="space-y-6">
            <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-12 w-3/4 bg-gray-200 rounded-xl"></div>
            <div className="h-6 w-1/4 bg-gray-200 rounded-xl"></div>
            <div className="space-y-3 py-6 border-y border-gray-100">
              <div className="h-4 w-full bg-gray-100 rounded"></div>
              <div className="h-4 w-full bg-gray-100 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-14 w-40 bg-gray-200 rounded-2xl"></div>
              <div className="h-14 w-14 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
