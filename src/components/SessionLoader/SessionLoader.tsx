import {useSession} from 'next-auth/react';
import jwt from 'jsonwebtoken';
import {removeToken, setToken} from '@/services/axios';

type SessionLoaderProps = {
  children: React.ReactNode;
};

export const SessionLoader: React.FC<SessionLoaderProps> = ({children}) => {
  const {data: session, status} = useSession();

  // console.log({session, status});
  // console.log(session?.usuario)

  if (status === 'authenticated') {
    setToken(session.usuario.info.token);

    const decodedToken = jwt.decode(session.usuario.info.token);

    console.log(decodedToken);
  }

  if (status === 'unauthenticated') {
    removeToken();
  }

  return <>{children}</>;
};
