import React from 'react';
import {ContainerSection} from '../../../layouts/AdminPagesLayout/_components/ContainerSection';
import {Box, Button, colors, styled} from '@mui/material';
import TableAdminPanel from '../../../layouts/AdminPagesLayout/_components/TableAdminPanel';
import {themeDark} from '@/theme';
import agregarUser from '/public/img/add-user1.png';
import Image from 'next/image';
import Buscador from '../../../layouts/AdminPagesLayout/_components/Buscador';
const Section1 = () => {
  const AdminPanel = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stard',
    width: '75vw',
    backgroundColor: 'white',
    height: '500px',
    borderRadius: '0 15px 0 0',
    padding: '10px',
  });

  const BotonCreate = styled(Button)({
    width: '80%',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    color: themeDark.palette.secondary.main,
    marginRight: '50px',
    ':hover': {
      backgroundColor: 'blue',
      color: 'white',
    },
  });

  return (
    <ContainerSection>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <Buscador />
        <AdminPanel>
          <TableAdminPanel />
        </AdminPanel>
      </Box>
      <Box>
        <BotonCreate>
          <Image src={agregarUser} alt="" width={60} height={60} />
          <h3>Crear usuario</h3>
        </BotonCreate>
      </Box>
    </ContainerSection>
  );
};

export default Section1;
