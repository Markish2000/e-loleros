import { useMutation } from '@tanstack/react-query';
import instance from '../../../config';
import tokenDecode from '../../../helpers/tokenDecode';

const loginUser = async (formData) => {
  const response = await instance.post('/login', formData);

  localStorage.setItem('token', response.data.token);

  tokenDecode();

  return 'Acceso correcto';
};

export const useLoginUser = () => {
  const mutation = useMutation(loginUser);

  return mutation;
};
