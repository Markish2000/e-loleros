import StartPage from '../../components/StartPage';
import image from '../../assets/campionsStart.jpg';

const ChampionsPage = () => {
  const text =
    'La vida es un milagro tan curioso, creo que entre más extraña es la vida más sentido tiene -Ivern';

  return (
    <div>
      <StartPage image={image} title='campeones' text={text} />
    </div>
  );
};

export default ChampionsPage;
