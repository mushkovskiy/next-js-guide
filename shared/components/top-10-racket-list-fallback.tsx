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

export const Top10RacketListFallback = () => {
  return (
    <div className="mb-10">
      <div className="w-full">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mr-3">
              TOP 10
            </div>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Лучшие теннисные ракетки
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Подборка популярных и качественных теннисных ракеток, выбранных на основе
            отзывов и рейтингов профессионалов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
