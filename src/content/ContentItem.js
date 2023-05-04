import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const ContentItem = (props) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  console.log(isMatch);

  return (
    <Box
      bgcolor={!props.swap && '#fff'}
      display='flex'
      flexDirection={isMatch ? 'column' : 'row'}
      padding={10}
      justifyContent='space-between'
      alignItems='center'
    >
      {props.swap ? (
        <>
          <Box sx={{ margin: '0 0 24px' }}>
            <Typography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color='#734950'
              padding={3}
              variant='h4'
            >
              {props.title}
            </Typography>
            <Typography fontSize={{ lg: 22, md: 18, sm: 16, xs: 14 }}>
              {props.description}
            </Typography>
          </Box>

          <img
            fit={'cover'}
            src={props.img}
            alt={props.title}
            loading='lazy'
            width={isMatch ? '100%' : '50%'}
            style={{ boxShadow: '10px 10px 20px #ccc', marginLeft: '10%', borderRadius: 20 }}
            // heightMax='300px'
          />
          {/* </Box> */}
        </>
      ) : (
        <>
          <img
            fit={'cover'}
            src={props.img}
            alt={props.title}
            loading='lazy'
            width={isMatch ? '100%' : '50%'}
            style={{ boxShadow: '10px 10px 20px #ccc', marginRight: '10%', borderRadius: 20 }}
            // height='300px'
          />

          <Box>
            <Typography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color='#734950'
              padding={3}
              variant='h4'
            >
              {props.title}
            </Typography>
            <Typography fontSize={{ lg: 22, md: 18, sm: 16, xs: 14 }}>
              {props.description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
