import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';
import { cookies } from 'next/headers';

interface Params {
  page?: number;
  limit?: number;
  brand?: string;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
  brand,
}: Params): Promise<Response<TRacket[]>> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (brand) {
    params.set('brand', brand);
  }

  const cookieStore = await cookies();
  const result = await fetch(
    `http://localhost:4000/api/products?${params.toString()}`,
    {
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
  console.log('🚀 ~ getRackets ~ server-url:', `http://localhost:4000/api/products?${params.toString()}`);

  return { isError: false, data };
};
