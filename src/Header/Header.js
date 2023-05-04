import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CycloneIcon from '@mui/icons-material/Cyclone';
import DrawerComponent from './DrawerComponent';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { CustomizedTypography } from '../styles/styles.js';

const links = ['Home', 'Solutions', 'About Us', 'Contact'];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <AppBar position='sticky' sx={{ padding: 1, bgcolor: 'transparent', boxShadow: '0' }}>
      {isMatch ? (
        <Box display='flex' sx={{ alignItems: 'center' }}>
          <CycloneIcon fontSize='large' sx={{ color: 'black' }} />
          <CustomizedTypography
            fontWeight={'bold'}
            variant='h6'
            sx={{ padding: 2, color: 'black' }}
          >
            Project build with MUI
          </CustomizedTypography>
          <DrawerComponent links={links} />
        </Box>
      ) : (
        <Toolbar>
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <CycloneIcon fontSize='large' sx={{ color: 'black' }} />

            <Box>
              <CustomizedTypography
                fontWeight={'bold'}
                variant='h6'
                sx={{ padding: 2, color: 'black' }}
              >
                MUI
              </CustomizedTypography>
            </Box>

            <Box>
              <Tabs component={Link} sx={{ textDecoration: 'none' }}>
                {links.map((link, index) => (
                  <Tab
                    sx={{
                      textDecoration: 'none',
                      ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' },
                    }}
                    key={index}
                    label={link}
                  />
                ))}
              </Tabs>
            </Box>

            <Box display='flex' marginLeft={'auto'}>
              <Button sx={{ mr: 1 }} variant='outlined'>
                Talk To Us
              </Button>
              <Button sx={{ ml: 1 }} variant='contained'>
                Try For Free
              </Button>
            </Box>
          </Box>
        </Toolbar>
      )}

      <Box width='100%' height='100vh'>
        <video
          width={'100%'}
          height={'70%'}
          autoPlay
          loop
          muted
          playsInline
          src='/video.mp4'
        ></video>

        <Box display='flex' width='100%'>
          <CustomizedTypography
            fontWeight={'bold'}
            fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
            margin='auto'
            variant='h4'
            color='black'
            textAlign={'center'}
          >
            Empowering Your Digital Journey with Innovative Software Solutions
          </CustomizedTypography>
        </Box>

        <Box width='100%' display='flex' justifyContent={'center'} margin='auto' marginTop={5}>
          <Button endIcon={<EmailIcon />} variant='outlined' sx={{ mr: 2 }}>
            Sign up
          </Button>
          <Button endIcon={<GoogleIcon />} color='error' variant='contained' sx={{ ml: 2 }}>
            Sign up
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
