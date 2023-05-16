import { useMutation } from '@tanstack/react-query';
import instance from '../../../config';
import tokenDecode from '../../../helpers/tokenDecode';

const token = localStorage.getItem('token');

const updateUser = async ({ nickNameUser, formData }) => {
  console.log(('ne la llamada', nickNameUser));
  const response = await instance.patch(`/users/${nickNameUser}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`, // Incluir el token en el encabezado de la solicitud
    },
  });
  // localStorage.setItem('token', response.data.token);

  // tokenDecode();
  const updateUser = {
    ...response.data.data,
  };

  localStorage.setItem('user', JSON.stringify(updateUser));

  return;
};

export const useUpdateUser = () => {
  const mutation = useMutation(updateUser);

  return mutation;
};
