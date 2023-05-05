import { TextField } from '@mui/material';

const FormInput = ({ id, label, type }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant='outlined'
      fullWidth
      margin='normal'
      type={type}
    />
  );
};

export default FormInput;
