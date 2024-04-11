import { css } from "@emotion/react";

export const getDefaultTextStyle = (color: string, fontWeight: number) => {
  return css({
    color: color,
    fontWeight: fontWeight,
  });
};
