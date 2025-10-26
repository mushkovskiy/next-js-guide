'use client';

import { useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import useSWR from 'swr';
import ListView from '../../../../shared/components/list-view';
import { LIMIT } from './constants';

const fetcher = async (path: string) => {
  console.log('client-url', `${'http://localhost:4000/api'}/${path}`);
  const response = await fetch(`${'http://localhost:4000/api'}/${path}`, {
    credentials: 'include',
  });

  const result = await response.json();

  return { data: result };
};

export const RacketsPaginatedContainer: FC = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '') || 1;
  const brand = searchParams.get('brand') || 'Wilson';

  const { data, error, isLoading } = useSWR(
    `products?page=${page}&limit=${LIMIT}&brand=${brand}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    },
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', newPage.toString());
    params.set('limit', LIMIT.toString());
    if (brand) {
      params.set('brand', brand);
    }
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  const handleBrandChange = (newBrand: string) => {
    const params = new URLSearchParams();
    params.set('page', '1');
    params.set('limit', LIMIT.toString());
    if (newBrand) {
      params.set('brand', newBrand);
    }
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  const rackets = data?.data;

  if (error) {
    return 'error';
  }

  if (isLoading && !rackets?.length) {
    return 'isLoading';
  }

  if (!rackets?.length) {
    return 'no data';
  }

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <aside style={{ width: 220, padding: 16, borderRight: '1px solid #e5e7eb' }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Brand</div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => handleBrandChange('Wilson')}
            className={`px-3 py-2 rounded-md text-left transition-colors duration-150 ${
              brand === 'Wilson'
                ? 'bg-blue-500 text-white font-semibold'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}>
            Wilson
          </button>
          <button
            onClick={() => handleBrandChange('Head')}
            className={`px-3 py-2 rounded-md text-left transition-colors duration-150 ${
              brand === 'Head'
                ? 'bg-blue-500 text-white font-semibold'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}>
            Head
          </button>
          <button
            onClick={() => handleBrandChange('Babolat')}
            className={`px-3 py-2 rounded-md text-left transition-colors duration-150 ${
              brand === 'Babolat'
                ? 'bg-blue-500 text-white font-semibold'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}>
            Babolat
          </button>
          {brand && (
            <button
              onClick={() => handleBrandChange('')}
              className="px-3 py-2 rounded-md text-left text-sm bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-150 mt-2 font-medium">
              Сбросить фильтр
            </button>
          )}
        </nav>
      </aside>
      <main style={{ flex: 1 }}>
        <ListView items={rackets} />
      </main>
      <div className="flex items-center gap-3">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 font-medium shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed">
            Назад
          </button>
        )}
        <span className="px-3 py-2 bg-gray-100 rounded-md font-semibold text-gray-700 min-w-[40px] text-center">
          {page}
        </span>
        {rackets.length >= LIMIT && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 font-medium shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed">
            Вперёд
          </button>
        )}
      </div>
    </div>

  );
};
