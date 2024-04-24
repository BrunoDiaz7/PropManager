import React from 'react';
import {Box, Grid, styled} from '@mui/material';

type ContentContainerSectionProps = {
  children: React.ReactNode;
  sx?: Object;
};

const StyledSection = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  width: '100vw',
  height: '81vh',
});

export const ContainerSection: React.FC<ContentContainerSectionProps> = ({
  children,
  sx,
}) => {
  return <StyledSection sx={sx}>{children}</StyledSection>;
};
