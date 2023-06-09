import { Typography } from '@mui/material';

const FormTitle = ({ text }) => {
  return (
    <Typography
      variant='h4'
      sx={{
        fontSize: { xs: '1.75rem', sm: '1.75rem', md: '1.75rem' },
        marginBottom: '0.75rem',
        mt: { xs: '1rem', sm: '1rem', md: '0' },
      }}
    >
      {text}
    </Typography>
  );
};

export default FormTitle;
