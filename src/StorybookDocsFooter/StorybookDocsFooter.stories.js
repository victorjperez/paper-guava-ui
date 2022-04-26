import React from 'react';

import README from './README.mdx';

import { StorybookDocsFooter } from './StorybookDocsFooter';

export default {
  title: 'Docs Utilities/StorybookDocsFooter',
  component: StorybookDocsFooter,
  parameters: {
    docs: {
      page: README,
    },
  },
};
const Template = (args) => <StorybookDocsFooter {...args} />;

export const MainStory = Template.bind({});
