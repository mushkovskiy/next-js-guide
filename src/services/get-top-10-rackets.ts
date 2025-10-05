import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';
import { cookies } from 'next/headers';

export const getTop10Rackets = async (): Promise<Response<TRacket[]>> => {
  const cookieStore = await cookies();
  const result = await fetch('http://localhost:4000/api/top-10', {
    credentials: 'include',
    headers: {
      Cookie: cookieStore.toString(),
    },
    next: {
      tags: ['getTop10Rackets'],
    },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: TRacket[] = await result.json();

  return { isError: false, data };
};
