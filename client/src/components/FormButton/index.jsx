import { Button } from '@mui/material';

const FormButton = ({ text, isValid, isSubmitting, text2 }) => {
  return (
    <Button
      variant='contained'
      type='submit'
      sx={{
        width: '100%',
        marginTop: '1.25rem',
        // marginBottom: '1.5rem',
      }}
      disabled={!isValid}
    >
      {text}
    </Button>
  );
};

export default FormButton;
