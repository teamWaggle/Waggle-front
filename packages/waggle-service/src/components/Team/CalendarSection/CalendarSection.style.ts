import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const sectionStyle = (color: TeamColorType) =>
  css({
    height: "770px",
    minWidth: "1536px",
    maxWidth: "100%",
    padding: "0 196px",
    backgroundColor: Theme.color[color],
  });
