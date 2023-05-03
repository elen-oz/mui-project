import React from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab, Button, Link } from '@mui/material';
import CycloneIcon from '@mui/icons-material/Cyclone';

const links = ['Products', 'Solutions', 'Pricing', 'Enterprise'];

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: 'transparent', boxShadow: '0' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <CycloneIcon fontSize='large' sx={{ color: 'black' }} />

          <Box>
            <Typography variant='h6' sx={{ margin: 2, color: 'black' }}>
              MUI Project
            </Typography>
          </Box>

          <Box>
            <Tabs component={Link} sx={{ textDecoration: 'none' }}>
              {links.map((link, index) => (
                <Tab
                  sx={{
                    fontWeight: 'bold',
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
            <Button sx={{ mr: 2 }} variant='outlined'>
              Talk To Us
            </Button>
            <Button sx={{ ml: 2 }} variant='contained'>
              Try For Free
            </Button>
          </Box>
        </Box>
      </Toolbar>

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
          <Button variant='outlined' sx={{ mr: 3 }}>
            Sign in With Email
          </Button>
          <Button variant='contained' sx={{ ml: 3 }}>
            Sign in With Google
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
