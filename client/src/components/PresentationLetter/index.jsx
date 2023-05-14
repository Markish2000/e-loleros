import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';
import { Box, Grid, Typography } from '@mui/material';
import { useThemeContext } from '../../context/ThemeContext';

const PresentationLetter = ({
  name,
  linkedin,
  mail,
  github,
  imageLight,
  imageDark,
}) => {
  const theme = useThemeContext();
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        sx={{
          width: '100%',
          // border: '1px solid',
          // borderRadius: '20px',
          height: 'auto',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: '1rem',
          padding: '20px',
        }}
      >
        <Box>
          <StyledImg
            src={theme.palette.mode === 'light' ? imageLight : imageDark}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5'>{name}</Typography>
          <Typography variant='subtitle1'>Full Stack Web Developer</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '200px',
              marginTop: '20px',
            }}
            theme={theme}
          >
            <StyledA href={linkedin} theme={theme} rel='noreferrer'>
              <LinkedInIcon sx={{ fontSize: '25px' }} />
            </StyledA>
            <StyledA
              href={github}
              target='_blank'
              theme={theme}
              rel='noreferrer'
            >
              <GitHubIcon sx={{ fontSize: '25px' }} />
            </StyledA>

            <StyledA href={mail} theme={theme} rel='noreferrer'>
              <MailIcon sx={{ fontSize: '25px' }} />
            </StyledA>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledImg = styled.img`
  width: 300px;
  // height: 300px;
`;

export default PresentationLetter;
