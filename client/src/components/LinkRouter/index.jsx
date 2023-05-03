import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkRouter = ({ to, value, variant }) => {
  return (
    <Button
      variant={variant}
      component={Link}
      to={`/${to}`}
      sx={{ color: 'white', marginRight: '10px' }}
    >
      {value ? value : to}
    </Button>
  );
};

LinkRouter.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LinkRouter;
