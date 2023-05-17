import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  genre: Yup.string().required('El género es requerido'),
});

export default validationSchema;
