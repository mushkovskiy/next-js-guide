import { ToggleableRacketListContainer } from '@/containers/toggleable-racket-llst/racket-list-container';
import { Top10RacketListContainer } from '@/containers/top-10-racket-list-container/top-10-racket-list-container';
import { Suspense } from 'react';
import { ToggleableRacketListFallback } from '../../shared/components/toggleable-racket-list-fallback';
import { Top10RacketListFallback } from '../../shared/components/top-10-racket-list-fallback';

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<Top10RacketListFallback />}>
        <Top10RacketListContainer />
      </Suspense>
      <Suspense fallback={<ToggleableRacketListFallback />}>
        <ToggleableRacketListContainer />
      </Suspense>
    </>
  );
};
export default HomePage;
