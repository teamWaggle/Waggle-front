import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const teamScheduleCardBoxStyle = css({
  borderRadius: "16px",
  border: `1px solid ${Theme.color.border}`,
  padding: "20px",
});

export const teamScheduleCardHeaderBoxStyle = css({
  justifyContent: "space-between",
  alignItems: "start",
  marginBottom: "20px",
});

export const teamScheduleCardStatusBoxStyle = (isActivate: boolean) =>
  css({
    alignItems: "center",
    padding: "6px 12px",
    backgroundColor: isActivate ? Theme.color.btn_danger : Theme.color.disabled_text,
    borderRadius: "16px",
    color: Theme.color.white,
    fontSize: "14px",
  });

export const teamScheduleOverlapCount = (color: TeamColorType) =>
  css({
    color: Theme.color[color],
    marginLeft: "8px",
  });

export const addScheduleButtonStyle = (color: TeamColorType) =>
  css({
    border: `2px solid ${Theme.color[color]}`,
    backgroundColor: "transparent",
    color: Theme.color[color],
    borderRadius: "16px",
    padding: "6px 12px",
  });
