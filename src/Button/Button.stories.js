import React from 'react';

import README from './README.mdx';

import { Button } from './Button';

export default {
  title: 'Core UI/Button',
  component: Button,
  parameters: {
    docs: {
      page: README,
    },
  },
};
const Template = (args) => <Button {...args} />;

export const MainStory = Template.bind({});
MainStory.args = {
  label: 'Button',
  href: 'http://google.com',
};

export const GreenAccentColor = Template.bind({});
GreenAccentColor.args = {
  accentColor: 'forestgreen',
  label: 'Green Button',
};

const handleClick = () => alert('Button clicked!');

export const OnClickCallback = Template.bind({});
OnClickCallback.args = {
  onClick: handleClick,
  label: 'Click Me',
};

export const TileStyleType = Template.bind({});
TileStyleType.args = {
  label: 'Tile Button',
  styleType: 'tile',
};
