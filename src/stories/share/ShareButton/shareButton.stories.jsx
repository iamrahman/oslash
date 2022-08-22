import React from 'react';

import ShareButton from './shareButton';
export default {
  title: 'Oslash/ShareButton',
  component: ShareButton,
  argTypes: {
  },
};

const Template = (args) => <ShareButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'ShareButton',
};
