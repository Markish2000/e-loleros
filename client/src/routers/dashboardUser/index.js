import { Route, Routes } from 'react-router-dom';
import DetailChampionsPage from '../../views/DetailChampionsPage';
import DashboardUserPage from '../../views/DashboardUserPage';
import EditNamePage from '../../views/EditNamePage';
import EditPasswordPage from '../../views/EditPasswordPage';
import EditEmailPage from '../../views/EditEmailPage';
import EditDateOfBirthPage from '../../views/EditDateOfBirthPage';
import EditNickNamePage from '../../views/EditNickNamePage';

const DashboardUserRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardUserPage />} />
        <Route path='/edit-name' element={<EditNamePage />} />
        <Route path='/edit-nickName' element={<EditNickNamePage />} />
        <Route path='/edit-email' element={<EditEmailPage />} />
        <Route path='/edit-dateOfBirth' element={<EditDateOfBirthPage />} />
        <Route path='/edit-genre' element={<DetailChampionsPage />} />
        <Route path='/edit-nationality' element={<DetailChampionsPage />} />
        <Route path='/edit-password' element={<EditPasswordPage />} />
      </Routes>
    </>
  );
};
export default DashboardUserRouter;
