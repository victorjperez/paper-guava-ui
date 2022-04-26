import React from 'react';

import README from './README.mdx';

import { ImageLink } from './ImageLink';

export default {
  title: 'Core UI/Image Link',
  component: ImageLink,
  parameters: {
    docs: {
      page: README,
    },
  },
};
const Template = (args) => (
  <div
    style={{
      width: '400px',
      height: '300px',
      textShadow: '2px 2px 0 black',
      color: 'white',
      fontSize: '48px',
      textAlign: 'center',
    }}>
    <ImageLink {...args} />
  </div>
);

export const MainStory = Template.bind({});
MainStory.args = {
  href: '/writing',
  imgSrc: 'https://victorjperez.github.io/writing/assets/img/morgantown.jpg',
  children: <p>This Town</p>,
};
