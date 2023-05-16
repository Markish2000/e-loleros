import React, { useState } from 'react';
import FormButton from '../../components/FormButton';
import { useNavigate } from 'react-router-dom';
import EditBase from '../../components/EditBase';
import { Formik } from 'formik';
import validationSchema from './validate';
import AlertErrorEdit from '../../components/AlertErrorEdit';
import Swal from 'sweetalert2';
import { useUpdateUser } from '../../hooks/useUsers/useUpdateUser';
import FormSelect from '../../components/FormSelect';
import { genreOptions } from './formFields';

const EditGenrePage = () => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const navigate = useNavigate();
  const updateUser = useUpdateUser();
  const user = JSON.parse(localStorage.getItem('user'));
  const initialValues = {
    genre: '',
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
        handleBlur,
        handleSubmit,
        handleChange,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <EditBase>
          <form onSubmit={handleSubmit}>
            <FormSelect
              data={genreOptions}
              name='genre'
              label='Género'
              values={values}
              handleChange={handleChange}
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

export default EditGenrePage;
