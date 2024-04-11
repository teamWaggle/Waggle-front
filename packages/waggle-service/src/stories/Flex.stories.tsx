import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/components/common/Design/Box/Box";
import Flex from "@/components/common/Design/Flex/Flex";

import { Theme } from "@/styles/Theme";

const meta = {
  title: "Flex",
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stories: Story = {
  render: (args) => {
    return (
      <Flex styles={args.styles}>
        <Box
          styles={{
            width: "100px",
            height: "60px",
            backgroundColor: Theme.color.brand_primary,
            borderRadius: "5px",
          }}
        >
          <div>box1</div>
        </Box>
        <Box
          styles={{
            width: "100px",
            height: "60px",
            backgroundColor: Theme.color.btn_success,
            borderRadius: "5px",
          }}
        >
          <div>box2</div>
        </Box>
      </Flex>
    );
  },
  args: {
    styles: {
      border: "1px solid #000",
      width: "800px",
      height: "500px",
      align: "center",
      justify: "center",
      gap: "50px",
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
