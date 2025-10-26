import { Metadata } from 'next';
import { FC } from 'react';
import { SWRConfig } from 'swr';
import { getRackets } from '@/services/get-rackets';
import { LIMIT } from './constants';
import { getKey } from './get-key';
import { unstable_serialize } from 'swr/infinite';
import RacketsInfinityContainer from './rackets-infinity-container';

export const metadata: Metadata = {
  title: 'Tennis Rackets',
};

const Page: FC = async () => {
  const { data } = await getRackets({ page: 1, limit: LIMIT });

  if (!data) {
    return 'no rackets';
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(getKey(data))]: data,
        },
        revalidateOnFocus: false,
      }}>
      <RacketsInfinityContainer initialData={data} />
    </SWRConfig>
  );
};

export default Page;
