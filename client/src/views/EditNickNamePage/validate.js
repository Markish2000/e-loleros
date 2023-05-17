import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nickName: Yup.string()
    .min(5, 'El usuario debe tener al menos 5 caracteres')
    .max(30, 'El usuario puede tener como máximo 30 caracteres')
    .required('El usuario es obligatorio'),
});

export default validationSchema;
