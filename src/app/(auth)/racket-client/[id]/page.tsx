import { getRacketById } from '@/services/get-racket-by-id';
import { getMetaRacketById } from '@/services/get-racket-meta-data-by-id';
import { SWRConfig } from 'swr';
import { RacketContainer } from './racket-container';
type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const { data } = await getMetaRacketById({ id });

  if (!data) {
    return {
      title: 'Racket page',
    };
  }
  return {
    title: data?.name,
    description: data?.description,
  };
};
const RacketPage = async ({ params }: Props) => {
  const { id } = await params;
  const result = await getRacketById({ id });

  return (
    <SWRConfig
      value={{
        fallback: {
          [`product/${id}`]: result,
        },
        revalidateOnFocus: false,
      }}>
      <RacketContainer id={id} />
    </SWRConfig>
  );
};

export default RacketPage;
