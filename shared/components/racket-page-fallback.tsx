export const RacketPageFallback = () => {
  return (
    <div className="grid grid-cols-[1fr_220px_120px] gap-4 items-center border border-gray-200 rounded-lg p-3 bg-white animate-pulse">
      <div>
        <div className="h-6 bg-gray-200 rounded mb-1.5 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
      </div>

      <div className="w-full h-[180px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
        <div className="w-full h-full bg-gray-200"></div>
      </div>

      <div className="text-right">
        <div className="h-7 bg-gray-200 rounded w-16 ml-auto"></div>
      </div>
    </div>
  );
};
