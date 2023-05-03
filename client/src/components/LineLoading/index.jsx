import { LinearProgress } from '@mui/material';

const LineLoading = () => {
  return (
    <LinearProgress
      sx={{
        bgcolor: '#BF9A56', // Cambia el color de fondo
        '& .MuiLinearProgress-bar': {
          bgcolor: '#071427', // Cambia el color de la línea
        },
      }}
    />
  );
};

export default LineLoading;
