import type { Meta, StoryObj } from "@storybook/react";

import Heading from "@/components/Heading/Heading";

import { containerStyle, informationStyle, titleStyle } from "../../../.storybook/styles";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xSmall", "small", "medium", "large", "xLarge", "xxLarge"],
    },
    children: {
      control: { type: "text" },
    },
  },
  args: {
    size: "medium",
    children: "Heading",
  },
};

export const Primary: StoryObj<typeof meta> = {
  args: {
    size: "xSmall",
  },

  render: ({ size, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6 css={titleStyle}>size : {size}</h6>
        <Heading size={size}>{children}</Heading>
      </li>
    </ul>
  ),
};

export default meta;
