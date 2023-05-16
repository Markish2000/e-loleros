import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, 'Solo se permiten letras')
    .required('El nombre es obligatorio'),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, 'Solo se permiten letras')
    .required('El nombre es obligatorio'),
});

export default validationSchema;
