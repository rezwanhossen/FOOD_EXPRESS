const ReviewSkeleton = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm animate-pulse">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-200 rounded-2xl"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-3 w-20 bg-gray-100 rounded-md"></div>
          </div>
        </div>
        <div className="h-6 w-24 bg-gray-100 rounded-xl"></div>
      </div>

      <div className="space-y-3 mb-8">
        <div className="h-4 w-full bg-gray-100 rounded"></div>
        <div className="h-4 w-full bg-gray-100 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white"></div>
        </div>
        <div className="h-10 w-24 bg-gray-200 rounded-2xl"></div>
      </div>
    </div>
  );
};
export default ReviewSkeleton;
