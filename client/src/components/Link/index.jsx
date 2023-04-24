import { Link } from 'react-router-dom';
import styles from './LinkRouter.module.css';

const LinkRouter = ({ to, value }) => {
  return (
    <Link to={to} className={styles.linksNav}>
      {value ? value : to}
    </Link>
  );
};

export default LinkRouter;
