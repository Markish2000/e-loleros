import instance from '../../../config';
import { useQuery } from '@tanstack/react-query';

const getAllChampions = async ({ queryKey }) => {
  const [_key, page] = queryKey;

  const response = await instance.get('/champions', {
    params: {
      page,
    },
  });

  return response.data;
};

export const useAllChampions = (currentPage) => {
  const query = useQuery(['champions', currentPage], getAllChampions, {
    keepPreviousData: true,
  });

  return query;
};
