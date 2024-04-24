import {AdminHeader} from './_components';
import {useState} from 'react';
import {Container, Typography, styled} from '@mui/material';
import {Footer} from '@/components';
import Section1 from '../../pages/admin/ListadoDeInquilinos/Section1';
import CrearUsuario from '@/pages/admin/CrearUsuario/CrearUsuario';
import {useSession} from 'next-auth/react';

const SectionContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100%',
  minHeight: '100vh',
  marginTop: '130px',
});

export const AdminPagesLayout = () => {
  const {data: session} = useSession();
  const [activeSection, setActiveSection] = useState(1);
  const handleSwitch = () => {
    setActiveSection(activeSection === 1 ? 2 : 1);
  };
  return (
    <>
      <AdminHeader
        auth={!!session}
        section={activeSection}
        onClick={handleSwitch}
      />
      <SectionContainer>
        {/* Sección 1 */}
        {activeSection === 1 && (
          <div>
            {/* <Section1/> */}
            {/* <CrearUsuario/> */}
          </div>
        )}

        {/* Sección 2 */}
        {activeSection === 2 && (
          <div>
            <Typography variant="body2">Propiedades</Typography>
            <p>Este es el contenido de la sección 2.</p>
          </div>
        )}
      </SectionContainer>
      <Footer sx={{position: 'absolute', bottom: 0}} />
    </>
  );
};
