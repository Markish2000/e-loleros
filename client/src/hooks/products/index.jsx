import instance from '../../config';
import { useQuery } from '@tanstack/react-query';

const getAllProducts = async ({ queryKey }) => {
  const [_key, page] = queryKey;

  const response = await instance.get(`/products`, {
      params: {
        page
      }
    }
  );

  return response.data;
  // throw new Error('Holis');
};

export const useAllProducts = (currentPage) => {

  const query = useQuery(['products', currentPage], getAllProducts, {
    keepPreviousData: true,
  });

  return query.data; 
}