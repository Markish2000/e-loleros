import { Route, Routes } from 'react-router-dom';
import ChampionsPage from '../../views/ChampionsPage';

const ChampionsRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ChampionsPage />} />

        {/* FUTURO DETALLE DEL CAMPEÓN */}
        {/* <Route path='/:id' element={<DetailChampionsPage />} /> */}
      </Routes>
    </>
  );
};
export default ChampionsRouter;
