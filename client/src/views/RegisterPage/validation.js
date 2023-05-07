import * as Yup from 'yup';
import { subYears } from 'date-fns';

const validationSchema = Yup.object().shape({
  nickName: Yup.string()
    .min(5, 'El usuario debe tener al menos 5 caracteres')
    .max(30, 'El usuario puede tener como máximo 30 caracteres')
    .required('El usuario es obligatorio'),
  firstName: Yup.string()
    .matches(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, 'Solo se permiten letras')
    .required('El nombre es obligatorio'),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, 'Solo se permiten letras')
    .required('El nombre es obligatorio'),
  email: Yup.string()
    .email('Ingresa un correo electrónico válido')
    .required('El email es obligatorio'),
  dateOfBirth: Yup.date()
    .required(),
  genre: Yup.string().required('El género es requerido'),
  nationality: Yup.string().required('El país es requerido'),
  image: Yup.mixed()
    .test('fileFormat', 'Formato de archivo no válido', (value) => {
      if (value) {
        const acceptedFormats = [
          'image/jpg',
          'image/jpeg',
          'image/png',
          'image/gif',
        ];
        return acceptedFormats.includes(value.type);
      }
      return true;
    })
    .test('fileSize', 'La imagen no debe superar los 5MB', (value) => {
      if (value) {
        return value.size <= 5000000; // 5MB en bytes
      }
      return true;
    })
    .required('Se requiere una imagen'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/,
      'La contraseña debe contener al menos una mayúscula, un número y un caracter especial'
    )
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria'),
});

export default validationSchema;
