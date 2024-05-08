import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const recommendCountTextStyle = (isRecommend: boolean) =>
  css({
    color: isRecommend ? Theme.color.brand_primary : Theme.color.border,
    fontWeight: 600,
    cursor: "pointer",

    "&:hover": {
      opacity: "0.4",
    },
  });
