import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const infoBoxStyle = css({
  "& > p": {
    fontWeight: 500,
    color: Theme.color.readonly_text,
  },
});
