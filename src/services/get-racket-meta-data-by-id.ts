import { Response } from '@/types/response';
import { TRacket } from '@/types/racket';

type Params = {
  id: string;
};

export const getMetaRacketById = async ({
  id,
}: Params): Promise<Response<TRacket>> => {
  const result = await fetch(`http://localhost:4000/meta/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: TRacket } = await result.json();

  return { isError: false, data: data.product };
};
