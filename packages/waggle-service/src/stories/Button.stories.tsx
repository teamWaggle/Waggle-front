import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/common/Design/Button/Button";

import { containerStyle, informationStyle } from "./styles";

import type { ButtonProps } from "@/components/common/Design/Button/Button";

const meta = {
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
} satisfies Meta<typeof Button>;

export default meta;
type Button = StoryObj<typeof meta>;

const createButtonStory = (variant: ButtonProps["variant"]) => ({
  args: {
    variant,
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
});

export const Playground: Button = {};

export const Variants: Button = {
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

export const Sizes: Button = {
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

export const Default: Button = createButtonStory("default");

export const Disabled: Button = createButtonStory("disabled");

export const White: Button = createButtonStory("white");

export const Outline: Button = createButtonStory("outline");

export const Danger: Button = createButtonStory("danger");
