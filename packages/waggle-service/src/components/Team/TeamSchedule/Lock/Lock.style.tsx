import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

import type { TeamColorType } from "@/types/team";

export const LockButtonStyle = (color: TeamColorType) =>
  css({
    width: "300px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.color[color],
  });
