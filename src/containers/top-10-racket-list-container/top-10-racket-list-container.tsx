import { getTop10Rackets } from '@/services/get-top-10-rackets';
import Top10ListView from '@/components/top-10-list-view/top-10-list-view';

export const Top10RacketListContainer = async () => {
  const { data, isError } = await getTop10Rackets();

  if (isError) {
    return 'error';
  }

  if (!data) {
    return 'no result';
  }
  return (
    <div className="mb-10">
      <Top10ListView items={data} />
    </div>
  );
};
