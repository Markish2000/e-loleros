import { Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const LinkRouter = ({ to, value, variant, color }) => {
  const theme = useTheme();
  const buttonColor = color ? color : theme.palette.text.primary;
  return (
    <Button
      variant={variant}
      component={Link}
      to={`/${to}`}
      sx={{ color: buttonColor, marginRight: '10px', mt: '5px', mb: '5px' }}
    >
      {/* <Typography variant='h4' color='text.primary' sx={{ color: buttonColor }}> */}
      {value ? value : to}
      {/* </Typography> */}
    </Button>
  );
};

LinkRouter.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LinkRouter;
