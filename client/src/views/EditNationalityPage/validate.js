import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nationality: Yup.string().required('El país es requerido'),
});

export default validationSchema;
