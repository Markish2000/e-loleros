import { useMutation } from '@tanstack/react-query';
import instance from '../../../config';

const loginUser = async (formData) => {
  const response = await instance.post('/login', formData);
  return response.data;
};

export const useLoginUser = () => {
  const mutation = useMutation(loginUser);

  return mutation;
};
