'use client';

import Racket from '@/components/racket/racket';
import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import useSWR from 'swr';

const fetcher = async (path: string) => {
  const result = await fetch(`http://localhost:4000/${path}`, {
    credentials: 'include',
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: TRacket } = await result.json();

  return { isError: false, data: data.product };
};

interface Props {
  id: string;
}

export const RacketContainer: FC<Props> = ({ id }) => {
  const { data, isLoading } = useSWR<Response<TRacket>>(
    `product/${id}`,
    fetcher,
    { revalidateOnFocus: false, revalidateIfStale: false },
  );

  const product = data?.data;

  if (data?.isError) {
    return 'some error';
  }

  if (isLoading) {
    return 'isLoadingSWR...';
  }

  if (!product) {
    return notFound();
  }

  return <Racket racket={product} />;
};
