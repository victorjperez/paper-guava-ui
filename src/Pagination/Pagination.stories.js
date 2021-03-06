import React from 'react';

import README from './README.mdx';

import { Pagination } from './Pagination';

export default {
  title: 'Core UI/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export const MainStory = (args) => {
  return <Pagination {...args} />;
};
MainStory.args = {
  pageCount: 10,
  maxVisible: 3,
  currentPage: 5,
};
