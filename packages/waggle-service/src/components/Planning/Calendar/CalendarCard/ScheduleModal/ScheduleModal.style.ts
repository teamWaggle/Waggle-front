import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { SchedulePositionType } from "@/types/planning";
import type { TeamColorType } from "@/types/team";

export const scheduleModalBoxStyle = ({ row, column, index }: SchedulePositionType) =>
  css({
    position: "absolute",
    zIndex: 2,
    top: `${index / 7 < 3 ? row : row - 250}` + "px",
    left: `${index % 7 < 4 ? column + 161 : column - 450}` + "px",
    width: "450px",
    height: "400px",
    backgroundColor: Theme.color.white,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    padding: "24px",
    flexDirection: "column",
    display: "flex",
  });

export const circleDivStyle = (color: TeamColorType) =>
  css({
    width: "20px",
    height: "20px",
    margin: "4px",
    borderRadius: "50%",
    background: Theme.color[color],
    boxShadow: "none", // Add the boxShadow property with an appropriate value
  });

export const scheduleTitleBoxStyle = css({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

export const scheduleTitleStyle = css({
  fontSize: "24px",
  color: Theme.color.text,
  fontWeight: "600",
});

export const scheduleModalIcon = css({
  width: "22px",
  height: "22px",
  cursor: "pointer",
  borderRadius: "50%",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: Theme.color.border,
  },
});

export const scheduleModalTime = css({
  fontSize: "16px",
  color: Theme.color.readonly_text,
  marginLeft: "36px",
  marginBottom: "16px",
});

export const scheduleModalTeamName = (color: TeamColorType) =>
  css({
    display: "flex",
    alignItems: "center",
    backgroundColor: Theme.color[color],
    color: Theme.color.white,
    height: "28px",
    padding: "0 16px",
    borderRadius: "16px",
  });

export const scheduleCommentBoxStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "16px",
  height: "200px",
  overflow: "auto",
});
