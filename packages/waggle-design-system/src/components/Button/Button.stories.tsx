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

export const Variants: StoryObj<typeof meta> = {
  render: ({ size, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Default</h6>
        <Button variant="default" size={size}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Disabled</h6>
        <Button variant="disabled" size={size}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>white</h6>
        <Button variant="white" size={size}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>outline</h6>
        <Button variant="outline" size={size}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>danger</h6>
        <Button variant="danger" size={size}>
          {children}
        </Button>
      </li>
    </ul>
  ),
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Sizes: StoryObj<typeof meta> = {
  render: ({ variant, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Small</h6>
        <Button variant={variant} size="small">
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Medium</h6>
        <Button variant={variant} size="medium">
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Large</h6>
        <Button variant={variant} size="large">
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>xLarge</h6>
        <Button variant={variant} size="xLarge">
          {children}
        </Button>
      </li>
    </ul>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

export default meta;
