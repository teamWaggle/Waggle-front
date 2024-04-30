import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const uploadMediaBoxStyle = (
  isDragOver: boolean,
  width: number,
  height: number,
  borderRadius: string
) =>
  css({
    width,
    height,
    backgroundColor: isDragOver ? "#ffeaca" : Theme.color.brand_primary,
    borderRadius,
    border: width > 700 ? `5px solid ${Theme.color.white}` : "none",

    "& > p": {
      fontWeight: 600,
      color: isDragOver ? Theme.color.brand_primary : Theme.color.white,
    },

    "& > input": {
      display: "none",
    },

    "& > svg > path": {
      fill: isDragOver ? Theme.color.brand_primary : "",
    },
  });
