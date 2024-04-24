import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  styled,
  Container,
  Typography,
  Box,
} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import logo from '/public/img/logo.png';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {logOut} from '@/services/auth';
import {UserGreetings} from '@/components';

const ButtonContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '20px',
  width: 'auto',
  margin: '15px 0 15px 0',
  gap: '20px',
  background: '#192863',
});

const NavContainer = styled(AppBar)({
  display: 'flex',
  right: 0,
  height: '130px',
  width: '90vw',
  borderRadius: '60px 0 0 60px',
});

const RightContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 0,
  width: '100%',
  alignItems: 'center',
});

const TagsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  margin: '0 0 0 100px',
  width: 'auto',
  height: '50%',
  padding: 0,
});

const StyledTag = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20%',
  height: '100%',
  borderRadius: '30px 30px 0 0',
});

type AdminHeaderProps = {
  onClick?: React.ReactEventHandler;
  section?: number;
  auth: Boolean;
};

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onClick,
  section,
  auth,
}) => {
  return (
    <NavContainer position="absolute">
      <Toolbar sx={{padding: 0}}>
        <ButtonContainer>
          <IconButton
            disabled={section === 1}
            onClick={onClick}
            sx={{padding: 0}}
          >
            <ArrowCircleLeftOutlinedIcon
              sx={{color: '#8694c7', width: '40px', height: '40px'}}
            />
          </IconButton>
          <IconButton
            disabled={section === 2}
            onClick={onClick}
            sx={{padding: 0}}
          >
            <ArrowCircleRightOutlinedIcon
              sx={{color: '#8694c7', width: '40px', height: '40px'}}
            />
          </IconButton>
        </ButtonContainer>
        <RightContainer>
          <UserGreetings sx={{margin: '20px'}} />
          <NotificationsIcon
            sx={{color: 'yellow', width: '25px', height: '25px'}}
          />
          <Image
            alt="logo"
            style={{width: '40px', height: '40px'}}
            src={logo}
          />
          <Typography variant="body2">No Country</Typography>
          {auth && (
            <IconButton
              sx={{':hover': {backgroundColor: '#9747ff'}}}
              onClick={() => logOut()}
            >
              <LogoutIcon
                sx={{color: 'white', width: '30px', height: '30px'}}
              />
              <Typography variant="body2">Cerrar Sesión</Typography>
            </IconButton>
          )}
        </RightContainer>
      </Toolbar>
      <TagsContainer>
        <StyledTag
          sx={{
            backgroundColor: section === 1 ? '#9747FF' : 'inherit',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          <Typography variant="body2">Locatarios</Typography>
        </StyledTag>

        <StyledTag
          sx={{
            backgroundColor: section === 1 ? 'inherit' : '#9747FF',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          <Typography variant="body2">Propiedades</Typography>
        </StyledTag>
      </TagsContainer>
    </NavContainer>
  );
};
