import Racket from '@/components/racket/racket';
import { TRacket } from '../../../../mocks/mock-data-type';
import { rackets } from '../../../../mocks/mock-data';

type Props = {
  params: Promise<{ id: string }>;
};
export const generateStaticParams = async () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
};
const RacketPage = async ({ params }: Props) => {
  const { id } = await params;
  const racket = rackets.find((racket): racket is TRacket => racket.id == Number(id));
  return (
    <div>
      {racket && <Racket racket={racket} />}
    </div>
  );
};

export default RacketPage;
