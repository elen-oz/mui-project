import React from 'react';
import { Box } from '@mui/material';
import ContentItem from './ContentItem';

const contentArray = [
  {
    title: 'Custom Software Development',
    description:
      'Our team of experienced developers and architects collaborate with you to create bespoke software solutions tailored to your unique business needs. We deliver cutting-edge applications that elevate your business to new heights.',
    img: '/1.jpg',
  },
  {
    title: 'Productivity Enhancement',
    description:
      "Utilize our advanced productivity tools and strategies to streamline your work processes, minimize inefficiencies, and boost your team's output. Let us help you unlock your full potential and transform your organization.",
    img: '/2.jpg',
  },
  {
    title: 'Continuous Support & Improvement',
    description:
      'With our dedicated support and ongoing improvement services, we ensure your software solutions remain up-to-date and optimized for peak performance. Trust us to keep you ahead in this rapidly evolving digital landscape.',
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
