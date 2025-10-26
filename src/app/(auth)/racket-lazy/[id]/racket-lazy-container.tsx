'use client';

import Racket from '@/components/racket/racket';
import { TRacket } from '@/types/racket';
import { Response } from '@/types/response';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import useSWR from 'swr';

const fetcher = async (path: string) => {
  const result = await fetch(`http://localhost:4000/api/${path}`, {
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
  productId: string;
}

export const ProductContainer: FC<Props> = ({ productId }) => {
  console.log('render ProductContainer');
  const { data, isLoading } = useSWR<Response<TRacket>>(
    `product/${productId}`,
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

export default ProductContainer;
