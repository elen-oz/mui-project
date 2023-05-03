import React from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab, Button, Link } from '@mui/material';
import CycloneIcon from '@mui/icons-material/Cyclone';

const links = ['Products', 'Solutions', 'Pricing', 'Enterprise'];

const Header = () => {
  return (
    <AppBar position='fixed' sx={{ bgcolor: 'transparent', boxShadow: '0' }}>
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
            <Button sx={{ margin: 1 }} variant='outlined'>
              Talk To Us
            </Button>
            <Button sx={{ margin: 1 }} variant='contained'>
              Try For Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
