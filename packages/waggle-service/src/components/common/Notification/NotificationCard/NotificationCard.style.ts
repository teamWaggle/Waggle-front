import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const cardBoxStyle = css({
  padding: "20px",
  borderBottom: `1px solid ${Theme.color.border}`,
  width: "calc(100% - 20px)",

  "& > p": {
    textOverflow: "ellipsis",
    overflow: "hidden",
    wordBreak: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
});

export const variantTextStyle = css({
  color: Theme.color.input_text,

  "& > span": {
    fontWeight: 600,
  },
});

export const titleStyle = css({
  fontWeight: 600,
  color: Theme.color.readonly_text,
  position: "relative",
  paddingLeft: "8px",

  "&:before": {
    content: "''",
    width: "2px",
    height: "100%",
    backgroundColor: Theme.color.brand_primary,
    position: "absolute",
    left: 0,
  },
});

export const contentStyle = css({
  fontWeight: 600,
  color: Theme.color.input_text,
});

export const dateTextStyle = css({
  fontFamily: "Montserrat",
  color: Theme.color.disabled_text,
});
