import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const textTitleStyle = css({
  fontSize: "20px",
  fontWeight: 600,
  letterSpacing: "-0.2px",
  color: Theme.color.gray400,
  padding: "20px",
});

export const lockButtonStyle = (color: TeamColorType) =>
  css({
    backgroundColor: Theme.color[color],
  });
