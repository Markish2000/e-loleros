import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ingresa un correo electrónico válido')
    .required('El email es obligatorio'),
});

export default validationSchema;