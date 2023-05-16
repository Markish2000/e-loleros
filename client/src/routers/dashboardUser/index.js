import { Route, Routes } from 'react-router-dom';
import DetailChampionsPage from '../../views/DetailChampionsPage';
import DashboardUserPage from '../../views/DashboardUserPage';
import EditNamePage from '../../views/EditNamePage';
import EditPasswordPage from '../../views/EditPasswordPage';

const DashboardUserRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardUserPage />} />
        <Route path='/edit-name' element={<EditNamePage />} />
        <Route path='/edit-nickName' element={<DetailChampionsPage />} />
        <Route path='/edit-email' element={<DetailChampionsPage />} />
        <Route path='/edit-dateOfBirth' element={<DetailChampionsPage />} />
        <Route path='/edit-genre' element={<DetailChampionsPage />} />
        <Route path='/edit-nationality' element={<DetailChampionsPage />} />
        <Route path='/edit-password' element={<EditPasswordPage />} />
      </Routes>
    </>
  );
};
export default DashboardUserRouter;
