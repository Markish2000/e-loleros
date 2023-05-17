import { Button, useTheme } from '@mui/material';

const ButtonFooter = ({ text, mr }) => {
  const theme = useTheme();

  return (
    <Button
      variant='text'
      color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}
      sx={{
        // width: '100%',
        fontSize: '0.75rem',
        marginTop: '10px',
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonFooter;
