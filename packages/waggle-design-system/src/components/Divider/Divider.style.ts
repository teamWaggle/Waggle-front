import { css } from "@emotion/react";

import type { DividerProps } from "@/components/Divider/Divider";

import { Theme } from "@/styles/Theme";

export const dividerStyle = (
  direction: Required<DividerProps>["direction"],
  length: Required<DividerProps>["length"]
) => {
  const style = {
    horizontal: css({
      borderBottom: `1px solid ${Theme.color.divider_gray}`,
      width: length,
    }),
    vertical: css({
      borderLeft: `1px solid ${Theme.color.divider_gray}`,
      height: length,
    }),
  };

  return style[direction];
};
