import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkRouter = ({ to, value }) => {
  return (
    <Button component={Link} to={`/${to}`} sx={{ color: 'white' }}>
      {value ? value : to}
    </Button>
  );
};

LinkRouter.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LinkRouter;
