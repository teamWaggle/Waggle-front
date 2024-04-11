import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const moreModalContainerStyle = css({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  zIndex: 100,
  width: "200px",
  backgroundColor: Theme.color.white,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  left: "-20px",
  paddingRight: "20px",
  paddingLeft: "20px",
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
