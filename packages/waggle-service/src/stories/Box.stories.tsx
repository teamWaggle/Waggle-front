import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/components/common/Design/Box/Box";
import { containerStyle } from "@/stories/styles";

import { Theme } from "@/styles/Theme";

const meta = {
  title: "Box",
  component: Box,
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stories: Story = {
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
      border: "2px solid red",
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
