import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const LockBoxStyle = css({
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
});

export const LockButtonStyle = (color: TeamColorType) =>
  css({
    width: "300px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.color[color],
  });
