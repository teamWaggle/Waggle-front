import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const headerStyle = css({
  position: "sticky",
  top: 0,
  zIndex: 2,
  backgroundColor: Theme.color.white,
  borderBottom: `1px solid ${Theme.color.border}`,
});

export const headerBoxStyle = css({
  padding: "0 50px",
  height: "85px",
  maxWidth: "1254px",

  "& > svg": {
    cursor: "pointer",
  },
});

export const textStyle = css({
  color: Theme.color.black,
  fontFamily: "Montserrat",
  fontWeight: 600,
  cursor: "pointer",
});
