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
import dayjs from 'dayjs';
import FormDate from '../../components/FormDate';

const EditDateOfBirthPage = () => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const navigate = useNavigate();
  const updateUser = useUpdateUser();
  const user = JSON.parse(localStorage.getItem('user'));
  const initialValues = {
    dateOfBirth: null,
  };

  const handleSubmit = (values) => {
    let newValues = { ...values };

    newValues = {
      ...newValues,
      dateOfBirth: dayjs(values.dateOfBirth).format('MM/DD/YYYY'),
    };

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
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <EditBase>
          <form onSubmit={handleSubmit}>
            <FormDate
              values={values}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
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

export default EditDateOfBirthPage;
