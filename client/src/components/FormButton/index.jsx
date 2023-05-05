import { Button } from '@mui/material';

const FormButton = ({ text }) => {
  return (
    <Button
      variant='contained'
      type='submit'
      sx={{
        width: '100%',
        marginTop: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      {text}
    </Button>
  );
};

export default FormButton;
