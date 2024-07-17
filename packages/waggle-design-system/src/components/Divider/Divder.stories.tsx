import type { Meta, StoryObj } from "@storybook/react";

import Divider from "@/components/Divider/Divider";

import { containerStyle, informationStyle } from "../../../.storybook/styles";

const meta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  argTypes: {
    length: {
      control: { type: "text" },
    },
    direction: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    length: "100px",
    direction: "horizontal",
  },
};

export const Primary: StoryObj<typeof meta> = {
  render: ({ length, direction }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>
          <span>length : {length}</span>direction : {direction}
        </h6>
        <Divider length={length} direction={direction} />
      </li>
    </ul>
  ),
};

export default meta;
