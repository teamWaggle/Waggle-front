import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/components/Box/Box";

import { Theme } from "@/styles/Theme";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
};

export const Primary: StoryObj<typeof meta> = {
  render: (args) => {
    return (
      <Box styles={args.styles}>
        <div>box1</div>
      </Box>
    );
  },
  args: {
    styles: {
      backgroundColor: Theme.color.brand_primary,
      borderRadius: "5px",
      color: Theme.color.white,
      padding: "20px",
      border: `2px solid ${Theme.color.black}`,
    },
  },
  argTypes: {
    styles: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;
