import jwtDecode from 'jwt-decode';

const tokenDecode = () => {
  const token = localStorage.getItem('token');
  const tokenDecode = jwtDecode(token);
  localStorage.setItem('user', tokenDecode);
  return;
};

export default tokenDecode;
