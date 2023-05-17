import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  dateOfBirth: Yup.string().required(),
});

export default validationSchema;
