import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { CustomizedTypography } from '../styles/styles.js';

const ContentItem = (props) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  console.log(isMatch);

  return (
    <Box
      bgcolor={!props.swap && '#fff'}
      display='flex'
      flexDirection={isMatch ? 'column' : 'row'}
      padding={10}
      justifyContent={isMatch ? 'center' : 'space-between'}
      alignItems='center'
    >
      {props.swap ? (
        <>
          <Box sx={{ margin: '0 5% 24px' }}>
            <CustomizedTypography
              fontWeight={'bold'}
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color='#734950'
              padding={3}
              variant='h4'
            >
              {props.title}
            </CustomizedTypography>
            <CustomizedTypography fontSize={{ lg: 22, md: 18, sm: 16, xs: 14 }}>
              {props.description}
            </CustomizedTypography>
          </Box>
          <img
            fit={'cover'}
            src={props.img}
            alt={props.title}
            loading='lazy'
            width={isMatch ? '80%' : '50%'}
            style={{ boxShadow: '10px 10px 20px #ccc', borderRadius: 20 }}
            maxHeight='300px'
          />
        </>
      ) : (
        <>
          <img
            fit={'cover'}
            src={props.img}
            alt={props.title}
            loading='lazy'
            width={isMatch ? '80%' : '50%'}
            style={{ boxShadow: '10px 10px 20px #ccc', borderRadius: 20 }}
            // height='300px'
          />

          <Box sx={{ margin: '0 5% 0' }}>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color='#734950'
              padding={3}
              variant='h4'
            >
              {props.title}
            </CustomizedTypography>
            <CustomizedTypography fontSize={{ lg: 22, md: 18, sm: 16, xs: 14 }}>
              {props.description}
            </CustomizedTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
