'use client';

import { useState } from 'react';
import Carousel from '../../../shared/components/carousel';
import ListView from '../../../shared/components/list-view';
import { rackets } from '../../../mocks/mock-data';

const ToggleableListView = () => {
  const [view, setView] = useState<'list' | 'carousel'>('carousel');
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800">Rackets</h3>
        <button
          onClick={() => setView((prev) => prev === 'list' ? 'carousel' : 'list')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          View
          {' '}
          {view === 'list' ? 'Carousel' : 'All'}
        </button>
      </div>

      <div className="mt-4">
        {view === 'carousel' ? <Carousel items={rackets} visibleCount={3} /> : <ListView items={rackets} />}
      </div>
    </div>
  );
};

export default ToggleableListView;
