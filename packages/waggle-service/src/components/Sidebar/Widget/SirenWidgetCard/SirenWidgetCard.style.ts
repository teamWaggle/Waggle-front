import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const widgetBoxStyle = css({
  padding: "6px 12px",
  borderRadius: "8px",
  boxShadow: Theme.boxShadow.shadow1,
  width: "266px",
  cursor: "pointer",

  "& > img": {
    width: "68px",
    height: "68px",
    borderRadius: "8px",
  },
});

export const textStyle = css({
  color: Theme.color.text,
  fontSize: "14px",
  lineHeight: "18px",
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "152px",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
});

export const subTextStyle = css({
  color: Theme.color.readonly_text,
  fontSize: "9px",
  lineHeight: "11px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "152px",
});

export const tagStyle = css({
  top: "-14px",
  left: "-16px",
});
