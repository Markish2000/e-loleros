import { Route, Routes } from "react-router-dom";
import DashboardUserPage from "../../views/DashboardUserPage";
import EditNamePage from "../../views/EditNamePage";
import EditPasswordPage from "../../views/EditPasswordPage";
import EditEmailPage from "../../views/EditEmailPage";
import EditDateOfBirthPage from "../../views/EditDateOfBirthPage";
import EditNickNamePage from "../../views/EditNickNamePage";
import EditGenrePage from "../../views/EditGenrePage";
import EditNationalityPage from "../../views/EditNationalityPage";
import EditImagePage from "../../views/EditImagePage";
import ProfileAdminPage from "../../views/ProfileAdminPage";
import DashboardAdminPage from "../../views/DashboardAdminPage";

const DashboardAdminRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardAdminPage />} />
        <Route path="/profile" element={<DashboardUserPage />} />
        <Route path="/edit-name" element={<EditNamePage />} />
        <Route path="/edit-nickName" element={<EditNickNamePage />} />
        <Route path="/edit-email" element={<EditEmailPage />} />
        <Route path="/edit-dateOfBirth" element={<EditDateOfBirthPage />} />
        <Route path="/edit-genre" element={<EditGenrePage />} />
        <Route path="/edit-nationality" element={<EditNationalityPage />} />
        <Route path="/edit-password" element={<EditPasswordPage />} />
        <Route path="/edit-image" element={<EditImagePage />} />
      </Routes>
    </>
  );
};
export default DashboardAdminRouter;
//
