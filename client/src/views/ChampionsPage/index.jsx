import StartPage from '../../components/StartPage';
import imageDark from '../../assets/campionsStart.jpg';
import imageLight from '../../assets/championsLight.jpeg'
import { useThemeContext } from '../../context/ThemeContext';


const ChampionsPage = () => {
  const text =
    'La vida es un milagro tan curioso, creo que entre más extraña es la vida más sentido tiene -Ivern';

    const theme = useThemeContext()

  return (
    <div>
      <StartPage image={theme.palette.mode === 'light' ? imageLight : imageDark} title='campeones' text={text} />
    </div>
  );
};

export default ChampionsPage;
