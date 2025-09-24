'use client';

import { useState } from 'react';
import Carousel from '../../../shared/components/carousel';
import ListView from '../../../shared/components/list-view';
import { TRacket } from '@/types/racket';

export const ToggleableRacketListView = ({ items }: { items: TRacket[] }) => {
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
        {view === 'carousel' ? <Carousel items={items} visibleCount={3} /> : <ListView items={items} />}
      </div>
    </div>
  );
};
