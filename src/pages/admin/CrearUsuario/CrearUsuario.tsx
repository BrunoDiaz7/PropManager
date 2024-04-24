import React from 'react';
import {ContentContainer, CreateContainer} from '@/components';
import {Box, Grid, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

const CrearUsuario = () => {
  const [rol, setRol] = React.useState('');

  type User = {
    rol: string;
    nombre: string;
    apellido: string;
    propiedad: string;
    locador: string;
    telefono: string;
    email: string;
  };
  const [user, setUser] = React.useState<User>({
    rol: '',
    nombre: '',
    apellido: '',
    propiedad: '',
    locador: '',
    telefono: '',
    email: '',
  });
  const handleChange = (event: SelectChangeEvent<string>) => {
    setRol(event.target.value);
    setUser(prevUser => ({
      ...prevUser,
      rol: event.target.value,
    }));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Datos del usuario:', user);
    // aca va el endpoint para enviar datos a la base de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '800px',
            height: '570px',
            marginTop: '20px',
            borderRadius: '15px',
          }}
        >
          <Grid
            item
            sx={{
              width: '40%',
              borderBottom: '1px solid grey',
              padding: '10px 20px',
            }}
          >
            <h4>Nuevo Usuario</h4>
          </Grid>

          <FormControl
            fullWidth
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 3,
              height: '500px',
            }}
          >
            <Grid
              item
              sx={{
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'end',
              }}
            >
              <InputLabel id="rol-label">Rol</InputLabel>
              <Select
                labelId="rol-label"
                value={rol}
                onChange={handleChange}
                sx={{width: '25%'}}
              >
                <MenuItem value="Locatario">Locatario</MenuItem>
                <MenuItem value="Locador">Locador</MenuItem>
              </Select>
            </Grid>

            <Grid
              container
              sx={{justifyContent: 'space-around', marginTop: '10px'}}
            >
              <Grid
                item
                sx={{
                  flexDirection: 'column',
                  width: '50%',
                  alignItems: 'center',
                }}
              >
                <TextField
                  id="nombreInput"
                  label="Nombre"
                  variant="outlined"
                  margin="dense"
                  name="nombre"
                  onChange={handleInputChange}
                />
                <TextField
                  id="propiedadInput"
                  label="Direccion propiedad"
                  variant="outlined"
                  margin="dense"
                  name="propiedad"
                  onChange={handleInputChange}
                />
                <TextField
                  id="telefonoInput"
                  label="Telefono"
                  variant="outlined"
                  margin="dense"
                  name="telefono"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid
                item
                sx={{
                  flexDirection: 'column',
                  width: '50%',
                  alignItems: 'center',
                }}
              >
                <TextField
                  id="apellidoInput"
                  label="Apellido"
                  variant="outlined"
                  margin="dense"
                  name="apellido"
                  onChange={handleInputChange}
                />
                <TextField
                  id="locadorInput"
                  label="Locador"
                  variant="outlined"
                  margin="dense"
                  name="locador"
                  onChange={handleInputChange}
                />
                <TextField
                  id="emailInput"
                  label="Email"
                  variant="outlined"
                  margin="dense"
                  name="email"
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Grid
              container
              sx={{justifyContent: 'space-around', marginTop: '10px'}}
            >
              <TextField
                id="nuevoUserInput"
                label="Nuevo usuario"
                variant="outlined"
                fullWidth
                margin="dense"
                name="nuevo_usuario"
                onChange={handleInputChange}
              />
              <TextField
                id="nuevoPasswordInput"
                label="Nuevo password"
                variant="outlined"
                fullWidth
                margin="dense"
                name="nuevo_password"
                onChange={handleInputChange}
              />
            </Grid>
          </FormControl>
        </Grid>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{marginBottom: '20px'}}
        >
          Agregar Usuario
        </Button>
      </Grid>
    </form>
  );
};

export default CrearUsuario;
