import {ReactNode} from 'react';
import {Footer, Header} from '@/components';
import {styled, Box} from '@mui/material';
import {useSession} from 'next-auth/react';

type MainAppLayoutProps = {
  title?: string;
  children: ReactNode;
};

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  title,
  children,
}) => {
  const {data: session} = useSession();
  return (
    <>
      <Header auth={!!session} title={title} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};
