import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';

interface Params {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
}: Params): Promise<Response<TRacket[]>> => {
  console.log('getRackets');
  const result = await fetch(
    `http://localhost:4000/api/products?page=${page}&limit=${limit}`, {
    
    }
  
  );

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: TRacket[] = await result.json();

  return { isError: false, data };
};
