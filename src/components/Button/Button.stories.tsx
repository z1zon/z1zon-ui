import React from 'react';
import { Meta } from '@storybook/react';
import Button from '@/components/Button/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Primary = () => {
  return <Button />;
};
