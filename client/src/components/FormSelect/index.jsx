import { MenuItem, TextField } from '@mui/material';

const FormSelect = ({ data, id, label }) => {
  return (
    <TextField id={id} select label={label} fullWidth margin='normal'>
      {data.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormSelect;
