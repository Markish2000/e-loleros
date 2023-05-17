import { TextField } from '@mui/material';
import React, { useState } from 'react';
import FormButton from '../../components/FormButton';
import { useNavigate } from 'react-router-dom';
import EditBase from '../../components/EditBase';
import { Formik } from 'formik';
import validationSchema from './validate';
import AlertErrorEdit from '../../components/AlertErrorEdit';
import Swal from 'sweetalert2';
import { useUpdateUser } from '../../hooks/useUsers/useUpdateUser';

const EditPasswordPage = () => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const navigate = useNavigate();
  const updateUser = useUpdateUser();
  const user = JSON.parse(localStorage.getItem('user'));
  const initialValues = {
    password: '',
    repeatPassword: '',
  };

  const passwordFields = [
    {
      field: 'password',
      label: 'Contraseña',
    },
    {
      field: 'repeatPassword',
      label: 'Repetir contraseña',
    },
  ];

  const handleSubmit = (values) => {
    let newValues = { ...values };
    delete newValues.repeatPassword;

    updateUser.mutate(
      { nickNameUser: user.nickName, formData: newValues },
      {
        onSuccess: () => {
          Swal.fire({
            icon: 'success',
            title: 'Cambios realizados con éxito',
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            navigate('/profile');
          });
        },
        onError: () => {
          setErrorAlertOpen(true);
        },
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <EditBase>
          <form onSubmit={handleSubmit}>
            {passwordFields.map(({ field, label }) => (
              <TextField
                name={field}
                label={label}
                type='password'
                variant='outlined'
                fullWidth
                margin='normal'
                value={values[field]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[field] && Boolean(errors[field])}
                helperText={touched[field] && errors[field]}
              />
            ))}
            <FormButton
              text='Cambiar'
              isValid={isValid}
              isSubmitting={isSubmitting}
            />
            {errorAlertOpen && <AlertErrorEdit />}
          </form>
        </EditBase>
      )}
    </Formik>
  );
};

export default EditPasswordPage;
