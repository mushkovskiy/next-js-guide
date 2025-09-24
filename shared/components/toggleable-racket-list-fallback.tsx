'use client';

import { useState } from 'react';

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

const CarouselSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled
          className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full text-gray-700 cursor-not-allowed opacity-40 transition-all duration-200 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        <button
          type="button"
          disabled
          className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full text-gray-700 cursor-not-allowed opacity-40 transition-all duration-200 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex gap-1.5 mt-1.5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${idx === 0 ? 'bg-gray-900' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

const GridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export const ToggleableRacketListFallback = () => {
  const [view, setView] = useState<'list' | 'carousel'>('carousel');

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mr-3">
              КАТАЛОГ
            </div>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <button
            onClick={() => setView((prev) => prev === 'list' ? 'carousel' : 'list')}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium text-sm">
            {view === 'list' ? 'Карусель' : 'Список'}
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          Теннисные ракетки
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          Широкий выбор теннисных ракеток для игроков всех уровней подготовки -
          от начинающих до профессионалов
        </p>
      </div>

      <div>
        {view === 'carousel' ? <CarouselSkeleton /> : <GridSkeleton />}
      </div>
    </div>
  );
};
