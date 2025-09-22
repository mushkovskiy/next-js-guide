'use client';

import { useMemo, useState } from 'react';
import { TRacket } from '../../mocks/mock-data-type';
import { CarouselCard } from './carousel-card';

type CarouselProps = {
  items: TRacket[];
  visibleCount?: number;
};

const clampIndex = (index: number, length: number) => {
  if (length === 0) return 0;
  const mod = index % length;
  return mod < 0 ? mod + length : mod;
};

const Carousel = ({ items, visibleCount = 3 }: CarouselProps) => {
  const data = items;
  const [startIndex, setStartIndex] = useState(0);

  const canPaginate = data.length > visibleCount;

  const visibleItems = useMemo(() => {
    if (data.length === 0) return [] as TRacket[];
    if (data.length <= visibleCount) return data;

    const end = startIndex + visibleCount;
    if (end <= data.length) {
      return data.slice(startIndex, end);
    }
    const overflow = end - data.length;
    return [...data.slice(startIndex), ...data.slice(0, overflow)];
  }, [data, startIndex, visibleCount]);

  const getVisibleCount = () => {
    if (data.length === 0) return [] as TRacket[];
    if (data.length <= visibleCount) return data;

    const end = startIndex + visibleCount;
    if (end <= data.length) {
      return data.slice(startIndex, end);
    }
    const overflow = end - data.length;
    return [...data.slice(startIndex), ...data.slice(0, overflow)];
  };
  const goNext = () => {
    if (!canPaginate) return;
    setStartIndex((prev) => clampIndex(prev + visibleCount, data.length));
  };

  const goPrev = () => {
    if (!canPaginate) return;
    setStartIndex((prev) => clampIndex(prev - visibleCount, data.length));
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPaginate}
          className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-4">
          {getVisibleCount().map((item) => (
            <CarouselCard key={item.id} item={item} />
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          disabled={!canPaginate}
          className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {data.length > 0 && (
        <div className="flex gap-1.5 mt-1.5">
          {data.map((_, idx) => {
            const page = Math.floor(idx / visibleCount);
            const currentPage = Math.floor(startIndex / visibleCount);
            return (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${page === currentPage ? 'bg-gray-900' : 'bg-gray-300'}`} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
