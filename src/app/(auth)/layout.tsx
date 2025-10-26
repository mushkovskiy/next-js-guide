import { FC, PropsWithChildren } from 'react';
import { Layout } from '@/components/layout/layout';
import { getUser } from '@/services/get-user';
import { UserProvider } from '../providers/user/user-provider';
import { FavoriteProvider } from '../providers/favourite';

const AppLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data}>
      <FavoriteProvider>
        <Layout>{children}</Layout>
      </FavoriteProvider>
    </UserProvider>
  );
};

export default AppLayout;
