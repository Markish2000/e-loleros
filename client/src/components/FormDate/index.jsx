import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field } from 'formik';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';

const FormDate = ({ values, touched, errors, handleBlur }) => {
  const eighteenYearsAgo = dayjs().subtract(18, 'year').subtract(1, 'day');

  const [error, setError] = useState(null);

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'fieldNull': {
        return 'La fecha de nacimiento es requerida';
      }
      case 'maxDate': {
        return 'Para poder registrarte debes ser mayor a 18 años';
      }
      case 'invalidDate': {
        return 'Fecha de nacimiento inválida';
      }
      default: {
        return '';
      }
    }
  }, [error]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <Field name='dateOfBirth'>
          {({ field, form }) => (
            <DatePicker
              {...field}
              label='Fecha de nacimiento'
              disableFuture
              value={values.dateOfBirth}
              onError={(newError) => setError(newError)}
              onBlur={() => {
                handleBlur();
              }}
              onChange={(date) => {
                form.setFieldValue('dateOfBirth', date);
              }}
              slotProps={{
                textField: {
                  helperText:
                    errorMessage ||
                    (touched.dateOfBirth &&
                      Boolean(errors.dateOfBirth) &&
                      setError('fieldNull')),
                  error:
                    touched.dateOfBirth && Boolean(errors.dateOfBirth)
                      ? true
                      : false,
                  format: 'DD/MM/YYYY',
                },
              }}
              maxDate={eighteenYearsAgo}
              sx={{ width: '100%', mb: '0.50rem' }}
            />
          )}
        </Field>
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default FormDate;
