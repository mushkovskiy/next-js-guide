'use client';

import { FC } from 'react';
import useSWRInfinite from 'swr/infinite';

import { getKey } from './get-key';
import ListView from '../../../../shared/components/list-view';
import { TRacket } from '@/types/racket';
import { LIMIT } from './constants';

const fetcher = async (path: string | TRacket[] | undefined) => {
  if (typeof path !== 'string' && path !== undefined) {
    return path;
  }

  const result = await fetch(`${'http://localhost:4000/api'}/${path}`, {
    credentials: 'include',
  });

  return result.json();
};

interface Props {
  initialData: TRacket[];
}

export const RacketsInfinityContainer: FC<Props> = ({ initialData }) => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite<TRacket[]>(
    getKey(initialData),
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
      parallel: true,
    },
  );

  const rackets: TRacket[] = data ? ([] as TRacket[]).concat(...data) : [];

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < LIMIT);

  if (error) {
    return 'some error';
  }

  if (isLoading && !rackets.length) {
    return 'isInitialLoading...';
  }

  if (isEmpty) {
    return 'no rackets';
  }

  return (
    <div>
      <ListView items={rackets} />
      {!isReachingEnd && (
        <div className="flex justify-center mt-8 mb-4">
          <button
            disabled={isLoadingMore}
            onClick={() => setSize(size + 1)}
            className={`
              px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 
              ${isLoadingMore
          ? 'bg-gray-400 cursor-not-allowed opacity-70'
          : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5'
        }
              focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
              min-w-[120px] text-sm md:text-base
            `}>
            {isLoadingMore
              ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Загрузка...</span>
                </div>
              )
              : (
                'Загрузить ещё'
              )}
          </button>
        </div>
      )}
    </div>
  );
};

export default RacketsInfinityContainer;
