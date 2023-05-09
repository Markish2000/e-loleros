import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const allCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');

  const countries = response.data.map((country) => country.name.common);
  countries.sort((a, b) => a.localeCompare(b));

  return countries;
};

export const useAllCountries = () => {
  const query = useQuery(['countries'], allCountries);

  return query;
};
