import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const infoBoxStyle = css({
  "& > p": {
    fontWeight: 500,
    color: Theme.color.readonly_text,
  },
});
