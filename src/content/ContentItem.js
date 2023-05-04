import React from 'react';
import { Box, Typography } from '@mui/material';

const ContentItem = (props) => {
  return (
    <Box
      bgcolor={!props.swap && '#fff'}
      display='flex'
      padding={10}
      justifyContent='space-between'
      alignItems='center'
    >
      {props.swap ? (
        <>
          <Box>
            <Typography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color='#734950'
              padding={3}
              variant='h4'
            >
              {props.title}
            </Typography>
            <Typography fontSize={{ lg: 22, md: 18, sm: 16, xs: 14 }} variant='body' padding={3}>
              {props.description}
            </Typography>
          </Box>
          <img
            src={props.img}
            alt={props.title}
            loading='lazy'
            width='50%'
            style={{ boxShadow: '10px 10px 20px #ccc', marginLeft: '30%', borderRadius: 20 }}
            height='300px'
          />{' '}
        </>
      ) : (
        <>
          <img
            src={props.img}
            alt={props.title}
            loading='lazy'
            width='50%'
            style={{ boxShadow: '10px 10px 20px #ccc', marginRight: '30%', borderRadius: 20 }}
            height='300px'
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
            <Typography fontSize={{ lg: 22, md: 18, sm: 16, xs: 14 }} variant='body' padding={3}>
              {props.description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
