import type { Meta, StoryObj } from "@storybook/react";

import Text from "@/components/Text/Text";

import { containerStyle, informationStyle } from "../../../.storybook/styles";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xSmall", "small", "medium", "large", "xLarge"],
    },
    children: {
      control: { type: "text" },
    },
  },
  args: {
    size: "medium",
    children: "Text",
  },
};

export const Primary: StoryObj<typeof meta> = {
  render: ({ size, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>size : {size}</h6>
        <Text size={size}>{children}</Text>
      </li>
    </ul>
  ),
};

export default meta;
