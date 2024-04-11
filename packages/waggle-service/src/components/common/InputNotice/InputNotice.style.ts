import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const infomationStyle = (isVaild: boolean) =>
  css({
    color: isVaild ? Theme.color.disabled_text : Theme.color.btn_danger,
    alignItems: "center",
    fontSize: "14px",
    gap: "4px",
    circle: {
      stroke: isVaild ? Theme.color.disabled_text : Theme.color.btn_danger,
    },
    "path ": {
      fill: isVaild ? Theme.color.disabled_text : Theme.color.btn_danger,
    },
  });
