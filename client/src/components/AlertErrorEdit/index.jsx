import { Alert } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';

const AlertErrorEdit = ({ text }) => {
  const theme = useThemeContext();
  const textDefault = 'Error al cambiar los datos';
  return (
    <Alert
      variant='outlined'
      severity='error'
      sx={{
        mt: '0.75rem',
        mb: '0.75rem',
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
      }}
    >
      {!text ? textDefault : text}
    </Alert>
  );
};

export default AlertErrorEdit;
