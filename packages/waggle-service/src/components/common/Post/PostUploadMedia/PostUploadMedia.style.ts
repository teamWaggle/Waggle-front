import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",

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
