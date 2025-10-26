import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';
import { cookies } from 'next/headers';

interface Params {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
}: Params): Promise<Response<TRacket[]>> => {
  const cookieStore = await cookies();
  const result = await fetch(
    `http://localhost:4000/api/products?page=${page}&limit=${limit}`, {
      credentials: 'include',
      headers: {
        Cookie: cookieStore.toString(),
      },
    },

  );

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: TRacket[] = await result.json();

  return { isError: false, data };
};
