import {Typography} from '@mui/material';
import {useSession} from 'next-auth/react';
import React from 'react';

type UserGreetingsProps = {
  sx?: Object;
};

export const UserGreetings: React.FC<UserGreetingsProps> = ({sx}) => {
  const {data: session} = useSession();
  const auth = !!session;
  // @ts-ignore
  const userName = session?.usuario.info?.nombreUsuario
  return auth ? (
    <Typography
      sx={sx}
      variant="body2"
    >{`¡Bienvenido ${userName}!`}</Typography>
  ) : (
    ''
  );
};
