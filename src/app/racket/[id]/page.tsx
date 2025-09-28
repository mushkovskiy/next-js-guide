import Racket from '@/components/racket/racket';
import { getRacketById } from '@/services/get-racket-by-id';
import { getMetaRacketById } from '@/services/get-racket-meta-data-by-id';
import { notFound } from 'next/navigation';

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
  const { data, isError } = await getRacketById({ id });

  if (isError) {
    return 'error';
  }

  if (!data) {
    return notFound();
  }
  return (
    <div>
      <Racket racket={data} />
    </div>
  );
};

export default RacketPage;
