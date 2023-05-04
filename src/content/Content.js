import React from 'react';
import { Box } from '@mui/material';
import ContentItem from './ContentItem';

const contentArray = [
  {
    title: 'Get Things Done',
    description:
      'Lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.',
    img: '/1.jpg',
  },
  {
    title: 'Productivity is Brilliant',
    description:
      'lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.',
    img: '/2.jpg',
  },
  {
    title: 'Fast Development',
    description:
      'lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.',
    img: '/3.jpg',
  },
];

const Content = () => {
  return (
    <Box
      bgcolor='#fbf2f2'
      display='flex'
      justifyContent={'center'}
      flexDirection='column'
      width='100%'
      height='10%'
    >
      {contentArray.map((item, index) => (
        <ContentItem
          title={item.title}
          description={item.description}
          img={item.img}
          key={index}
          swap={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Content;
