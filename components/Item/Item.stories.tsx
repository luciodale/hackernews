import { Item, ItemProps } from './Item';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Item',
  component: Item,
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'white',
          value: 'white'
        },
        {
          name: 'grey',
          value: 'grey'
        },
        {
          name: 'black',
          value: 'black'
        }
      ]
    }
  }
} as Meta;

// With named export we define component's story
export const Default: Story<ItemProps> = (args) => <Item {...args} />;
// Define default arguments for the Default story
Default.args = {
  title: 'Far far away, behind the word mountains, far from the countries Vokalia and Cons',
  url: 'https://www.bbc.com/news/world-europe-57871308',
  by: "luciodale",
  time: 1626610772,
  score: 34,
};
