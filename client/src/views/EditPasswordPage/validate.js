import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/,
      'La contraseña debe contener al menos una mayúscula, un número y un caracter especial'
    )
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es requerida'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Debes repetir la contraseña'),
});

export default validationSchema;
