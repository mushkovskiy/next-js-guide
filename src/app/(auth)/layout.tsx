import { UserProvider } from '../providers/user-provider';
import { FC, PropsWithChildren } from 'react';
import { Layout } from '@/components/layout/layout';
import { getUser } from '@/services/get-user';

const AppLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <UserProvider user={data}>
      <Layout>{children}</Layout>
    </UserProvider>
  );
};

export default AppLayout;
