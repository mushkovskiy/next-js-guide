import { FC, Suspense } from 'react';
import { SWRConfig } from 'swr';
import { LIMIT } from './constants';
import { getRackets } from '@/services/get-rackets';
import { RacketsPaginatedContainer } from './rackets-paginated-container';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ racketId: string }>;
}

const Page: FC<Props> = async ({ searchParams }) => {
  const { page = '1', brand = 'Wilson' } = await searchParams;

  let pageNumber = 1;
  if (typeof page === 'string') {
    pageNumber = parseInt(page) || 1;
  }
  const brandValue = typeof brand === 'string' ? brand : 'Wilson';
  return (
    <Suspense fallback="suspense loading ...">
      <SWRConfig
        value={{
          fallback: {
            [`products?page=${page}&limit=${LIMIT}&brand=${brandValue}`]: getRackets({
              page: pageNumber,
              limit: LIMIT,
              brand: brandValue,
            }),
          },
        }}>
        <RacketsPaginatedContainer />
      </SWRConfig>
    </Suspense>
  );
};

export default Page;
