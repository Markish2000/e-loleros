import { Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const LinkRouter = ({ to, value, variant, colorText, color }) => {
  const theme = useTheme();
  const buttonColorText = colorText ? colorText : theme.palette.text.primary;
  const buttonColor = color ? color : 'primary';
  console.log(buttonColor, 'chau');
  return (
    <Button
      variant={variant}
      component={Link}
      to={`/${to}`}
      color={buttonColor}
      sx={{
        color: buttonColorText,
        marginRight: '10px',
        mt: '5px',
        mb: '5px',
      }}
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
