import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const teamScheduleBoxStyle = css({
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
});
export const teamScheduleTitleStyle = css({
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "-0.2px",
  color: Theme.color.text,
});

export const teamScheduleSearchButtonStyle = css({
  padding: "6px 12px",
  borderRadius: "2px",
  border: "none",
  backgroundColor: Theme.color.border,
  cursor: "pointer",
});

export const teamScheduleAddButtonStyle = (color: TeamColorType) =>
  css({
    padding: "6px 12px",
    gap: "8px",
    alignItems: "center",
    borderRadius: "2px",
    border: "none",
    backgroundColor: Theme.color[color],
    color: Theme.color.white,
    cursor: "pointer",
  });

export const teamScheduleGridBoxStyle = css({
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridGap: "20px",
});
