import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";
import type { TeamScheduleStatusType } from "@/types/schedule";

const teamScheduleStatusColor: { [key in TeamScheduleStatusType]: string } = {
  IN_PROGRESS: Theme.color.btn_danger,
  UPCOMING: Theme.color.brand_primary,
  CLOSING: Theme.color.disabled_text,
};

export const teamScheduleCardBoxStyle = css({
  borderRadius: "16px",
  border: `1px solid ${Theme.color.border}`,
  padding: "20px",
});

export const teamScheduleCardStatusBoxStyle = (teamScheduleStatus: TeamScheduleStatusType) =>
  css({
    alignItems: "center",
    padding: "6px 12px",
    backgroundColor: teamScheduleStatusColor[teamScheduleStatus],
    borderRadius: "16px",
    color: Theme.color.white,
    fontSize: "14px",
  });

export const addScheduleButtonStyle = (color: TeamColorType) =>
  css({
    border: `2px solid ${Theme.color[color]}`,
    backgroundColor: "transparent",
    color: Theme.color[color],
    borderRadius: "16px",
    padding: "6px 12px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: Theme.color[color],
      color: Theme.color.white,
    },
  });
