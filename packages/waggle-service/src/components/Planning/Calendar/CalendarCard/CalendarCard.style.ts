import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const flexStyle = css({
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
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

export const scheduleFlexBox = css({
  flexDirection: "column",
  width: "100%",
  height: "100%",
  border: "none",
});

export const scheduleTextStyle = (color: TeamColorType, lastSchedule?: boolean) =>
  css({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: Theme.color.white,
    height: "18px",
    marginBottom: "2px",
    width: lastSchedule ? "calc(100% - 16px)" : "calc(100% + 1px)",
    borderRadius: lastSchedule ? "0 .5rem .5rem 0" : "0px",
    paddingLeft: "16px",
    backgroundColor: Theme.color[color],
    fontsize: "12px",
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
