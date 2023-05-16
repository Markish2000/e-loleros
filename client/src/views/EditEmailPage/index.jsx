import React, { useState } from 'react';
import { TextField } from '@mui/material';
import FormButton from '../../components/FormButton';
import { useNavigate } from 'react-router-dom';
import EditBase from '../../components/EditBase';
import { Formik } from 'formik';
import validationSchema from './validate';
import AlertErrorEdit from '../../components/AlertErrorEdit';
import Swal from 'sweetalert2';
import { useUpdateUser } from '../../hooks/useUsers/useUpdateUser';

const EditEmailPage = () => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const navigate = useNavigate();
  const updateUser = useUpdateUser();
  const user = JSON.parse(localStorage.getItem('user'));
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values) => {
    updateUser.mutate(
      { nickNameUser: user.nickName, formData: values },
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
            <TextField
              name='email'
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <FormButton
              text='Cambiar'
              isValid={isValid}
              isSubmitting={isSubmitting}
            />
            {errorAlertOpen && <AlertErrorEdit text='El correo ya existe' />}
          </form>
        </EditBase>
      )}
    </Formik>
  );
};

export default EditEmailPage;
