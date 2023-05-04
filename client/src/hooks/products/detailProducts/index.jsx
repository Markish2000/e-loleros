import instance from '../../../config';
import { useQuery } from '@tanstack/react-query';

const getDetailProduct = async ({ queryKey }) => {
  const [_key, id] = queryKey;

  const response = await instance.get(`/products/${id}`);

  return response.data;
};

export const useDetailProducts = (id) => {
  const query = useQuery(['detailProducts', id], getDetailProduct);

  return query;
};
