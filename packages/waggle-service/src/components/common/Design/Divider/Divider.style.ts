import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { DividerProps } from "@/components/common/Design/Divider/Divider";

export const getDirectionStyling = (
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
