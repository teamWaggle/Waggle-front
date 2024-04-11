import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const TimePickerCardBoxStyle = (day: string) =>
  css({
    display: "flex",
    height: "32px",
    width: "180px",
    minWidth: "fit-content",
    alignItems: "center",
    paddingLeft: "8px",
    border: "none",
    backgroundColor: day ? Theme.color.white : Theme.color.gray100,
    ":hover": {
      backgroundColor: Theme.color.gray100,
      borderRadius: "4px",
    },
  });
