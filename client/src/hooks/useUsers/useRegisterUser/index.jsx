import { useMutation } from '@tanstack/react-query';
import instance from '../../../config';

const registerUser = async (formData) => {
  const response = await instance.post('/users', formData);

  return response.data;
};

export const useRegisterUser = () => {
  const mutation = useMutation(registerUser);

  return mutation;
};
