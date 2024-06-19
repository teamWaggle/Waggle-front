import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { SchedulePositionType } from "@/types/planning";
import type { TeamColorType } from "@/types/team";

export const scheduleModalBoxStyle = (position: SchedulePositionType, isMoreModal?: boolean) =>
  css({
    position: "absolute",
    zIndex: 2,
    top: isMoreModal
      ? `${
          position.index / 7 < 3
            ? position.row - (40 + 110 * (position.index / 7))
            : position.row + (-100 - 110 * (position.index / 7))
        }` + "px"
      : `${position.index / 7 < 3 ? position.row : position.row - 250}` + "px",
    left: isMoreModal
      ? `${
          position.index % 7 < 3
            ? position.column + (180 - 160 * (position.index % 7))
            : position.column - (486 + 160 * (position.index % 7))
        }` + "px"
      : `${position.index % 7 < 3 ? position.column + 161 : position.column - 500}` + "px",
    width: "500px",
    minHeight: "300px",
    maxHeight: "600px",
    backgroundColor: Theme.color.white,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    padding: "24px",
    flexDirection: "column",
    display: "flex",
    flexGrow: 1,
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

export const scheduleTitleStyle = css({
  fontSize: "24px",
  color: Theme.color.text,
  fontWeight: "600",
});

export const scheduleContentBoxStyle = css({
  flex: "1 0 auto",
  flexShrink: 1,
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  width: "100%",
});

export const scheduleContentStyle = css({
  width: "100%",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  flexShrink: 1,
});

export const scheduleContentIconStyle = css({
  flexShrink: 0,
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
