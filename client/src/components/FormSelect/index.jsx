import { MenuItem, TextField } from '@mui/material';

const FormSelect = ({
  data,
  name,
  label,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <TextField
      name={name}
      select
      label={label}
      fullWidth
      margin='normal'
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
    >
      {data.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormSelect;
