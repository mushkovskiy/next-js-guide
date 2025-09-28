const SkeletonCard = () => {
  return (
    <div className="w-[240px] border border-gray-200 rounded overflow-hidden bg-white animate-pulse">
      <div className="w-full h-[180px] bg-gray-200"></div>
      <div className="p-3">
        <div className="h-5 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};

const SidebarSkeleton = () => {
  return (
    <aside className="w-[220px] p-4 border-r border-gray-200 animate-pulse">
      <div className="font-bold mb-3 h-5 bg-gray-200 rounded w-16"></div>
      <nav className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-4 bg-gray-200 rounded w-20"></div>
        ))}
      </nav>
    </aside>
  );
};

const MainContentSkeleton = () => {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
};

export const RacketsPageFallback = () => {
  return (
    <div className="flex gap-6 items-start">
      <SidebarSkeleton />
      <MainContentSkeleton />
    </div>
  );
};
