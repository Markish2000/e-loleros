import styles from './Landing.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divTitle}>
        <h1 className={styles.titleH1}>E-Loleros</h1>
        <h2>League of Legends</h2>
        {/* <ButtonComponent variant='outlined' text='LET GO!' size='large' /> */}
        {/* <Link to='/home'>LET GO!</Link> */}
        <Link to='/home' className={styles.linkHome}>
          Home
        </Link>
      </div>
      <div className={styles.presentation}>
        <h3>Bienvenidos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem expedita facere blanditiis veritatis numquam, vero,
          dolor, laboriosam amet iste fugit dicta repudiandae maxime ipsa quis?
          Eum esse accusamus voluptas sint!
        </p>
        <iframe
          className={styles.video}
          src='https://www.youtube.com/embed/kmNui6kC1Lk'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LandingPage;

// ??
// !!
// TODO
// *
