import StartPage from '../../components/StartPage';
import image from '../../assets/productsStart.jpg';

const ShopPage = () => {
  const text =
    'Sólo tu puedes oírme invocador ¿Qué obra maestra vamos a tocar hoy? -Sona';

  return (
    <div>
      <StartPage image={image} title='productos' text={text} />
    </div>
  );
};

export default ShopPage;
