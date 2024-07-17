import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "@/components/Spinner/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: { type: "number" },
    },
    width: {
      control: { type: "number" },
    },
  },
  args: {
    size: 80,
    width: 8,
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: ({ size, width }) => <Spinner size={size} width={width} />,
};
