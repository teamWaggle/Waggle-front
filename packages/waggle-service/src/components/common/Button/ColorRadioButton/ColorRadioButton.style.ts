import { css } from "@emotion/react";

import CheckIcon from "@/assets/svg/check.svg";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const ColorRadioLabelStyle = (color: TeamColorType) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "120px",
    height: "100px",
    borderRadius: "6px",
    backgroundColor: Theme.color[color],
    marginRight: "8px",
  });

export const ColorRadioButtonStyle = (color: TeamColorType) =>
  css({
    appearance: "none",
    width: "100%",
    height: "100%",
    borderRadius: "6px",

    zIndex: 1,
    "&:checked": {
      backgroundImage: `url(${CheckIcon})`,
      backgroundColor: Theme.color[color],
      backgroundSize: "100% 100%",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
    },
  });
