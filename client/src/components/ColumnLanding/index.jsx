import { Box } from '@mui/material';

const ColumnLanding = ({ children, none }) => {
  let display = {};

  none
    ? (display = { xs: 'none', sm: 'none', md: 'flex' })
    : (display = { xs: 'flex' });

  return (
    <Box
      sx={{
        display: display,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: { xs: '80%', sm: '80%', md: '450px' },
        height: '100%',
        borderRight: {
          xs: 'none',
          sm: 'none',
          md: '1px solid rgba(255, 255, 255, 0.5)',
        },
        borderLeft: {
          xs: 'none',
          sm: 'none',
          md: '1px solid rgba(255, 255, 255, 0.5)',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ColumnLanding;
