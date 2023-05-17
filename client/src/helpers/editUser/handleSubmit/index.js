const user = JSON.parse(localStorage.getItem('user'));

const handleSubmit = (values) => {
  updateUser.mutate(
    { nickNameUser: user.nickName, formData: values },
    {
      onSuccess: () => {
        Swal.fire({
          icon: 'success',
          title: 'Cambios realizados con éxitos',
          showConfirmButton: false,
          timer: 2000,
        });
        navigate('/profile');
      },
      onError: () => {
        setErrorAlertOpen(true);
      },
    }
  );
};

export default handleSubmit;
