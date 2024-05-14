import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const teamScheduleOverlapCount = (color: TeamColorType) =>
  css({
    color: Theme.color[color],
    marginLeft: "8px",
  });

export const overlapScheduleModal = css({
  width: "fit-content",
  backgroundColor: Theme.color.white,
  border: `1px solid ${Theme.color.gray300}`,
  borderRadius: "12px",
  height: "fit-content",
  top: "30px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
});

export const overlapTransparentBackground = css({
  backgroundColor: "transparent",
  padding: "20px",
  width: "200px",
  height: "10px",
  position: "absolute",
  top: "20px",
});

export const overlapScheduleModalScheduleTitleStyle = css({
  padding: "8px",
  fontSize: "16px",
  fontWeight: "600",
});

export const overlapScheduleModalTeamNameStyle = (teamColor: TeamColorType) =>
  css({
    borderRadius: "12px",
    backgroundColor: Theme.color[teamColor],
    color: Theme.color.white,
    padding: "4px 10px",
  });

export const pointer = css({
  position: "absolute",
  borderStyle: "solid",
  borderWidth: "0 10px 13px",
  borderColor: `${Theme.color.white} transparent`,
  display: "block",
  width: "0",
  zIndex: "1",
  top: "-13px",
  left: "75px",
});

export const pointerBorder = css({
  position: "absolute",
  borderStyle: "solid",
  borderWidth: "0 10px 13px",
  borderColor: `${Theme.color.gray300} transparent`,
  display: "block",
  width: "0",
  zIndex: "0",
  top: "-14px",
  left: "75px",
});
