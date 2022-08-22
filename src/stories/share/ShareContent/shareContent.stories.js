import React from 'react';

import ShareContent from './shareContent';
export default {
  title: 'Oslash/ShareContent',
  component: ShareContent,
  argTypes: {
  },
};

const Template = (args) => <ShareContent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'ShareContent',
};
