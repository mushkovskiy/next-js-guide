import { ToggleableRacketListView } from '@/components/toggleable-racket-llst-view/toggleable-racket-llst-view';
import { getRackets } from '@/services/get-rackets';

export const ToggleableRacketListContainer = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 10 });

  if (isError) {
    return 'error';
  }

  if (!data) {
    return 'no result';
  }

  return <ToggleableRacketListView items={data} />;
};
