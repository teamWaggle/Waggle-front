import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const sectionStyle = (color: TeamColorType) =>
  css({
    position: "relative",
    height: "665px",
    minWidth: "1536px",
    maxWidth: "100%",
    flexDirection: "column",
    padding: "0 196px",
    alignItems: "center",
    backgroundColor: Theme.color[color],
  });
