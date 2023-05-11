import instance from '../../../config';
import { useQuery } from '@tanstack/react-query';

const getDetailChampion = async ({ queryKey }) => {
  const [_key, id] = queryKey;

  const response = await instance.get(`/champions/${id}`);

  return response.data;
};

export const useDetailChampions = () => {
  const query = useQuery(['detailChampions', id], getDetailChampion);

  return query;
};
