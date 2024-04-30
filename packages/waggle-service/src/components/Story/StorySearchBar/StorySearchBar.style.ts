import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const headingStyle = css({
  color: Theme.color.brand_primary,
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: "30px",

  "& > svg": {
    marginLeft: "4px",
  },
});

export const sortButtonBoxStyle = css({
  alignSelf: "flex-end",
});
