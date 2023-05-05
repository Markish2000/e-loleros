import { Typography } from '@mui/material';

const FormTitle = ({ text }) => {
  return (
    <Typography
      variant='h4'
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: 'auto' },
        marginBottom: '0.75rem',
      }}
    >
      {text}
    </Typography>
  );
};

export default FormTitle;
