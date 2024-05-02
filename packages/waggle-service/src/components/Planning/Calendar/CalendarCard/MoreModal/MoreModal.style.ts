import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const moreModalContainerStyle = css({
  zIndex: 1,
  backgroundColor: Theme.color.white,
  left: "-20px",
});

export const moreModalDayStyle = css({ color: Theme.color.text, marginTop: "16px" });

export const moreModalDateStyle = css({
  fontSize: "24px",
  color: Theme.color.text,
  marginBottom: "10px",
});

export const moreModalScheduleBoxStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "16px",
});

export const moreModalScheduleTextStyle = (color: TeamColorType) =>
  css({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: Theme.color.white,
    height: "18px",
    width: "100%",
    marginBottom: "2px",
    paddingLeft: "16px",
    backgroundColor: Theme.color[color],
    fontsize: "12px",
    borderRadius: "3px",
  });
