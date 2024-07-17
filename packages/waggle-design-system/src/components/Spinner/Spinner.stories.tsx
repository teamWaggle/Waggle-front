import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "@/components/Spinner/Spinner";

import { containerStyle, informationStyle, titleStyle } from "../../../.storybook/styles";

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
  render: ({ size, width }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6 css={titleStyle}>
          <span>size : {size}</span>width : {width}
        </h6>

        <Spinner size={size} width={width} />
      </li>
    </ul>
  ),
};
