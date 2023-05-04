import React from 'react';
import { Box, Button } from '@mui/material';
import { CustomizedTypography } from '../styles/styles.js';

const Footer = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <CustomizedTypography
        fontWeight={'bold'}
        fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
        variant='h4'
        paddingTop={6}
        textAlign='center'
      >
        Ready For Any Team Size
      </CustomizedTypography>
      <CustomizedTypography
        fontSize={{ lg: 28, md: 24, sm: 20, xs: 18 }}
        variant='div'
        textAlign={'center'}
        padding={3}
      >
        Optimized For Any Team Size
      </CustomizedTypography>
      <Box display='flex' margin={'auto'} justifyContent={'center'} padding={3}>
        <Button sx={{ mr: 2, fontSize: { lg: 18, md: 16, sm: 14, xs: 12 } }} variant='contained'>
          Try Now For Free
        </Button>
        <Button sx={{ ml: 2, fontSize: { lg: 18, md: 16, sm: 14, xs: 12 } }} variant='outlined'>
          Reserve a Call
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
