import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const flexStyle = css({
  flexWrap: "nowrap",
  backgroundColor: Theme.color.white,
  boxSizing: "border-box",
});

export const weekdayTextStyle = css({
  color: Theme.color.readonly_text,
  fontSize: Theme.text.xSmall.fontSize,
  lineHeight: Theme.text.xSmall.lineHeight,
});

export const dateTextStyle = (isSameMonth?: boolean) =>
  css({
    color: isSameMonth ? Theme.color.black : Theme.color.readonly_text,
    fontSize: Theme.text.xSmall.fontSize,
    lineHeight: Theme.text.xSmall.lineHeight,
  });

export const moreBoxStyle = css({
  position: "relative",
  color: Theme.color.text,
  fontSize: Theme.text.xSmall.fontSize,
  lineHeight: Theme.text.xSmall.lineHeight,
});

export const moreTextStyle = css({
  cursor: "pointer",
  marginLeft: "16px",
});
