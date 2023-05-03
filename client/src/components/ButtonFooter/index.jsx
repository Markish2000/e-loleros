import { Button } from '@mui/material';

const ButtonFooter = ({ text, mr }) => {
  return (
    <Button
      variant='outlined'
      color='third'
      sx={{
        fontSize: '0.75rem',
        marginRight: { xs: '0', sm: '0', md: mr },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonFooter;
