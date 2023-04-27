import StartPage from '../../components/StartPage';
import image from '../../assets/campionsStart.jpg';

const CampionsPage = () => {
  const text =
    'La vida es un milagro tan curioso, creo que entre más extraña es la vida más sentido tiene -Ivern';

  return (
    <div>
      <StartPage image={image} title='campions' text={text} />
    </div>
  );
};

export default CampionsPage;
