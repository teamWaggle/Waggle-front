import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const scheduleTextStyle = (color: TeamColorType, lastSchedule?: boolean) =>
  css({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: Theme.color.white,
    height: "18px",
    marginBottom: "2px",
    width: lastSchedule ? "calc(100% - 16px)" : "calc(100% + 1px)",
    borderRadius: lastSchedule ? "0 .5rem .5rem 0" : "0px",
    paddingLeft: "16px",
    backgroundColor: Theme.color[color],
    fontsize: "12px",
    cursor: "pointer",
  });
