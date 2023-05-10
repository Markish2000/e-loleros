import { Route, Routes } from 'react-router-dom';
import ChampionsPage from '../../views/ChampionsPage';
import DetailChampionsPage from '../../views/DetailChampionsPage';

const ChampionsRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ChampionsPage />} />
        <Route path='/:id' element={<DetailChampionsPage />} />
      </Routes>
    </>
  );
};
export default ChampionsRouter;
