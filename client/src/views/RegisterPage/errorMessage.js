export const getErrorMessage = (error) => {
  const errorMessage = error.response.data;
  if (errorMessage.includes('El nickName') && errorMessage.includes('el mail')) {
    return 'El usuario ya existe en la base de datos';
  } else if (errorMessage.includes('El email') && errorMessage.includes('ya existe')) {
    return 'El email ya existe en la base de datos';
  } else if (errorMessage.includes('El nickName') && errorMessage.includes('ya existe')) {
    return 'El usuario ya existe en la base de datos';
  } else {
    return 'Error al crear la cuenta, intente nuevamente por favor';
  }
}