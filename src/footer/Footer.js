import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h4' paddingTop={6} textAlign='center'>
        Ready For Any Team Size
      </Typography>
      <Typography variant='div' textAlign={'center'} padding={3}>
        Optimized For Any Team Size
      </Typography>
      <Box display='flex' margin={'auto'} justifyContent={'center'} padding={3}>
        <Button sx={{ mr: 2 }} variant='contained'>
          Try Now For Free
        </Button>
        <Button sx={{ ml: 2 }} variant='outlined'>
          Reserve a Call
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
