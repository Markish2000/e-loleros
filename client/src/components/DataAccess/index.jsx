import { Box } from '@mui/material';
import { Button, Typography } from 'antd';
import React from 'react';

const DataAccess = ({title, dataInput, text1, text2}) => {
  return (
    <Box>
      <Typography>Hey, bienvenido de nuevo</Typography>
      <Typography>input</Typography>
      <Typography>input</Typography>
      <Typography>¿No recuerdas tu contraseña? Recuperar</Typography>
      <Button>INGRESAR</Button>
      <Button>CONTINUAR CON GOOGLE</Button>
      <Typography>¿No tienes una cuenta? Regístrate</Typography>
    </Box>
  );
};

export default DataAccess;
