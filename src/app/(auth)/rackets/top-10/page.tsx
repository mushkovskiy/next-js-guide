import { Top10RacketListContainer } from '@/containers/top-10-racket-list-container/top-10-racket-list-container';
import { Suspense } from 'react';
import { Top10RacketListFallback } from '../../../../../shared/components/top-10-racket-list-fallback';
import { getTop10Rackets } from '@/services/get-top-10-rackets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 Rackets Page',
  description: 'Top 10 Rackets page',
};
const Top10RacketsPage = () => {
  const top10RacketsPromise = getTop10Rackets();
  return (
    <Suspense fallback={<Top10RacketListFallback />}>
      <Top10RacketListContainer top10RacketsPromise={top10RacketsPromise} />
    </Suspense>
  );
};

export default Top10RacketsPage;
