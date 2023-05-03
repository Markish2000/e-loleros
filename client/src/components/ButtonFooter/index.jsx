import { Button } from '@mui/material';

const ButtonFooter = ({ text, mr }) => {
  return (
    <Button
      variant='outlined'
      color='primary'
      sx={{
        fontSize: '0.75rem',
        marginRight: { xs: '0px', sm: '0px', md: mr },
        marginTop: { xs: '10px', sm: '10px', md: '0px' },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonFooter;
