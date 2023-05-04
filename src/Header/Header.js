import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
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

const links = ['Products', 'Solutions', 'Pricing', 'Enterprise'];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  console.log(isMatch);

  return (
    <AppBar position='sticky' sx={{ padding: 1, bgcolor: 'transparent', boxShadow: '0' }}>
      {isMatch ? (
        <Box display='flex' sx={{ alignItems: 'center' }}>
          <CycloneIcon fontSize='large' sx={{ color: 'black' }} />
          <Typography variant='h6' sx={{ padding: 2, color: 'black' }}>
            MUI
          </Typography>
          <DrawerComponent links={links} />
        </Box>
      ) : (
        <Toolbar>
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <CycloneIcon fontSize='large' sx={{ color: 'black' }} />

            <Box>
              <Typography variant='h6' sx={{ padding: 2, color: 'black' }}>
                MUI
              </Typography>
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
          <Typography margin='auto' variant='h4' color='black' textAlign={'center'}>
            Build Your Hassle Free And With Top Noch Quality
          </Typography>
        </Box>
        <Box width='100%' display='flex' justifyContent={'center'} margin='auto' marginTop={5}>
          <Button variant='outlined' sx={{ mr: 2 }}>
            Sign in With Email
          </Button>
          <Button variant='contained' sx={{ ml: 2 }}>
            Sign in With Google
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
