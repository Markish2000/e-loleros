import { Route, Routes } from 'react-router-dom';
import DetailProductPage from '../../views/DetailProductPage';
import ShopPage from '../../views/ShopPage';

const ShopRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/:id' element={<DetailProductPage />} />
      </Routes>
    </>
  );
};
export default ShopRouter;
