import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='fixed' color='primary'>
      <Toolbar>
        <Typography variant='h6'>Typography</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
