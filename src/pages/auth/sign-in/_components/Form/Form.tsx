import React from 'react';
import {Box, TextField} from '@mui/material';
import {CommonButton} from '@/components';
import {LogInCredentials} from '@/types/auth';
import {useFormik} from 'formik';
import validationSchema from '../../_utils/validation';
import {fields} from '../../_utils/fields';

type LogInFormProps = {
  onSubmit: (values: LogInCredentials) => void;
};

const initialValues = Object.fromEntries(
  fields?.map((field: any) => [field?.name, '']),
);

export const LogInForm: React.FC<LogInFormProps> = ({onSubmit}) => {
  const formik = useFormik<LogInCredentials>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}
    >
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{width: '100%'}}
      />

      <TextField
        label="Contraseña"
        name="contrasenia"
        type="password"
        value={formik.values.contrasenia}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contrasenia && Boolean(formik.errors.contrasenia)}
        helperText={
          formik.touched.contrasenia && Boolean(formik.errors.contrasenia)
        }
        sx={{width: '100%'}}
      />

      <CommonButton
        text="Iniciar Sesión"
        variant="contained"
        buttonSize="fullWidth"
        type="submit"
      />
    </Box>
  );
};
