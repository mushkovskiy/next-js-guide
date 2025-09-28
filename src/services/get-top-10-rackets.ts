import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';

export const getTop10Rackets = async (): Promise<Response<TRacket[]>> => {
  console.log('getTop10Rackets');
  const result = await fetch('http://localhost:4000/api/top-10', {
    next: {
      revalidate: 15,
    },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: TRacket[] = await result.json();

  return { isError: false, data };
};
