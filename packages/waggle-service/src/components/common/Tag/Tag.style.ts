import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const tagStyle = (color: string) => {
  return css({
    justifyContent: "center",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "18px",
    backgroundColor: color,
    color: Theme.color.text,
    cursor: "pointer",
    fontWeight: 500,
  });
};
