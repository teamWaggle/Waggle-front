import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const infomationStyle = (isVaild: boolean) =>
  css({
    color: isVaild ? Theme.color.disabled_text : Theme.color.btn_danger,
    fontSize: "14px",
    circle: {
      stroke: isVaild ? Theme.color.disabled_text : Theme.color.btn_danger,
    },
    "path ": {
      fill: isVaild ? Theme.color.disabled_text : Theme.color.btn_danger,
    },
  });
