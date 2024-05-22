import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const teamScheduleTitleStyle = css({
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "-0.2px",
  color: Theme.color.text,
});

export const teamScheduleSearchButtonStyle = css({
  padding: "7px 12px",
  borderRadius: "2px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Theme.color.gray100,
  },
});

export const teamScheduleAddButtonStyle = (color: TeamColorType) =>
  css({
    padding: "7px 12px",
    gap: "8px",
    alignItems: "center",
    borderRadius: "2px",
    border: "none",
    backgroundColor: Theme.color[color],
    color: Theme.color.white,
    cursor: "pointer",
    display: "flex",
  });

export const teamScheduleGridBoxStyle = css({
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridGap: "20px",
});
