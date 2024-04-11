import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const addTeamScheduleModalBoxStyle = css({
  width: "400px",
  backgroundColor: Theme.color.white,
  borderRadius: "16px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  flexDirection: "column",
});

export const addTeamScheduleModalTitleBoxStyle = (color: TeamColorType) =>
  css({
    width: "100%",
    padding: "16px",
    borderRadius: "16px 16px 0 0",
    color: Theme.color.white,
    marginBottom: "20px",
    backgroundColor: Theme.color[color],
  });

export const addTeamScheduleTitleCircleStyle = css({
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  border: `2px solid ${Theme.color.white}`,
  marginRight: "8px",
});

export const addTeamScheduleModalContentBoxStyle = css({
  width: "100%",
  padding: "0 16px 16px 16px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 16px 16px",
});

export const addTeamScheduleModalContentTitleStyle = css({
  fontWeight: 500,
  fontSize: "18px",
});

export const addTeamScheduleModalInputStyle = css({
  width: "100%",
  padding: "8px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  marginTop: "8px",
  outline: "none",
});

export const addTeamScheduleModalTextAreaStyle = css({
  width: "100%",
  padding: "8px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  marginTop: "8px",
  outline: "none",
  resize: "none",
  height: "200px",
});

export const TeamScheduleModalAddButtonStyle = (color: TeamColorType) =>
  css({
    display: "flex",
    padding: "6px 12px",
    gap: "8px",
    alignItems: "center",
    borderRadius: "2px",
    border: "none",
    backgroundColor: Theme.color[color],
    color: Theme.color.white,
    cursor: "pointer",
  });
