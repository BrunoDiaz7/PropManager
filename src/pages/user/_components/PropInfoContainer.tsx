import React from 'react';
import {ContentContainer} from '@/components';
import {styled, Box, Typography} from '@mui/material';
import {ContractsResponseData} from '@/types/contracts';

type PropInfoContainerProps = {
  contrato: ContractsResponseData;
};

const CommonContainer = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  flexDirection: 'column',
  marginBottom: '20px',
  justifyContent: 'space-between',
  borderBottom: '2px solid #000',
});

const SectionContainer = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  justifyContent: 'space-between',
});

const PropInfoContainer: React.FC<PropInfoContainerProps> = ({
  contrato,
}) => {
  if (!contrato) {
    return <div>Cargando...</div>;
  }

  const InfoPropiedad = contrato?.contrato?.info_propiedad;

  return InfoPropiedad ? (
    <ContentContainer
      sx={{
        marginTop: {xs: '2%', md: '4%', lg: '1%'},
        marginBottom: {xs: '9%', md: '15%', lg: '10%'},
        display: 'block',
        minHeight: '50%',
      }}
    >
      <CommonContainer>
        {InfoPropiedad &&
          Object.entries(InfoPropiedad).map(([clave, valor], index) => (
            <SectionContainer key={index}>
              <Typography sx={{fontWeight: '500'}} variant="body1">
                {clave}:
              </Typography>
              <Typography variant="body1">{valor}</Typography>
            </SectionContainer>
          ))}
      </CommonContainer>
    </ContentContainer>
  ) : null;
};

export default PropInfoContainer;