import { useMutation } from '@tanstack/react-query';
import instance from '../../../config';
import tokenDecode from '../../../helpers/tokenDecode';

const registerUser = async (formData) => {
  const response = await instance.post('/users', formData);

  localStorage.setItem('token', response.data.token);

  tokenDecode();

  return 'Registro correcto';
};

export const useRegisterUser = () => {
  const mutation = useMutation(registerUser);

  return mutation;
};
