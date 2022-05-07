import React from 'react';

import README from './README.mdx';

import { TypeTitle } from '../TypeTitle';
import { TypeBody } from '../TypeBody';

export default {
  title: 'Core UI/Typography',
  parameters: {
    docs: {
      page: README,
    },
  },
};
export const MainStory = (args) => (
  <div>
    <TypeTitle {...args}>The quick brown fox jumps over the lazy dog</TypeTitle>
    <TypeBody {...args}>The quick brown fox jumps over the lazy dog</TypeBody>
  </div>
);

MainStory.args = {
  bold: false,
};
