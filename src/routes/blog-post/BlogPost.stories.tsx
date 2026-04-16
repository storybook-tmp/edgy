import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import blogPostsData from '../../data/blogPostsData';
import BlogPost from './BlogPost';

const featuredPost = blogPostsData[0];
const growthPost = blogPostsData[1];
const strategyPost = blogPostsData[2];

const meta = {
  component: BlogPost,
} satisfies Meta<typeof BlogPost>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeaturedPost: Story = {
  parameters: {
    pathname: featuredPost.href,
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole('heading', { name: featuredPost.title })
    ).toBeVisible();
    await expect(
      await canvas.findByText(featuredPost.author.name, { selector: 'p' })
    ).toBeVisible();
  },
};

export const GrowthPost: Story = {
  parameters: {
    pathname: growthPost.href,
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole('heading', { name: growthPost.title })
    ).toBeVisible();
    await expect(
      await canvas.findByText(new RegExp(growthPost.readingTime, 'i'))
    ).toBeVisible();
  },
};

export const StrategyPost: Story = {
  parameters: {
    pathname: strategyPost.href,
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole('heading', { name: strategyPost.title })
    ).toBeVisible();
    await expect(await canvas.findByText(strategyPost.date)).toBeVisible();
  },
};
