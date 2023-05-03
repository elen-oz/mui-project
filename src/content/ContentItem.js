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
            <Typography color='#734950' padding={3} variant='h4'>
              {props.title}
            </Typography>
            <Typography variant='body' padding={3}>
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
            <Typography color='#734950' padding={3} variant='h4'>
              {props.title}
            </Typography>
            <Typography variant='body' padding={3}>
              {props.description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
