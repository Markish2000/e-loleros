import jwtDecode from 'jwt-decode';

const tokenDecode = () => {
  const token = localStorage.getItem('token');
  const tokenDecode = jwtDecode(token);

  localStorage.setItem('user', JSON.stringify(tokenDecode));

  return;
};

export default tokenDecode;
