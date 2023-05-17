import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  image: Yup.string().required('Se requiere una imagen'),
});

export default validationSchema;
