import Top10ListView from '@/components/top-10-list-view/top-10-list-view';
import { TRacket } from '@/types/racket';
import { use } from 'react';
import { Response } from '@/types/response';
import { notFound } from 'next/navigation';

export const Top10RacketListContainer =  ({ top10RacketsPromise }: { top10RacketsPromise: Promise<Response<TRacket[]>> }) => {
  const { data, isError } = use(top10RacketsPromise);

  if (isError) {
    return 'error';
  }

  if (!data) {
    return notFound();
  }
  return (
    <div className="mb-10">
      <Top10ListView items={data} />
    </div>
  );
};
