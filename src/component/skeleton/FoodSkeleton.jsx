const FoodSkeleton = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm animate-pulse">
      <div className="h-64 w-full rounded-[2rem] bg-gray-200"></div>

      <div className="mt-6 px-2">
        <div className="flex justify-between mb-4">
          <div className="h-6 w-1/2 bg-gray-200 rounded-lg"></div>
          <div className="h-6 w-1/4 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="space-y-2 mb-8">
          <div className="h-3 w-full bg-gray-100 rounded-md"></div>
          <div className="h-3 w-4/5 bg-gray-100 rounded-md"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="h-12 bg-gray-200 rounded-2xl"></div>
          <div className="h-12 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
export default FoodSkeleton;
