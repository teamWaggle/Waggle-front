import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/Button/Button";

import { containerStyle, informationStyle } from "../../../.storybook/styles";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "disabled", "white", "outline", "danger"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large", "xLarge"],
    },
    children: {
      control: { type: "text" },
    },
  },
  args: {
    variant: "default",
    size: "small",
    children: "Button",
  },
};

export const Primary: StoryObj<typeof meta> = {
  render: ({ variant, size, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>
          <span>size : {size}</span>variants : {variant}
        </h6>
        <Button variant={variant} size={size}>
          {children}
        </Button>
      </li>
    </ul>
  ),
};

export default meta;
