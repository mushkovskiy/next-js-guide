import { ToggleableRacketListView } from '@/components/toggleable-racket-llst-view/toggleable-racket-llst-view';
  import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';
import { use } from 'react';
import { notFound } from 'next/navigation';

export const ToggleableRacketListContainer = ({ racketsPromise }: { racketsPromise: Promise<Response<TRacket[]>> }) => {
  const { data, isError } = use(racketsPromise);

  if (isError) {
    return 'error';
  }

  if (!data) {
    return notFound();
  }

  return <ToggleableRacketListView items={data} />;
};
