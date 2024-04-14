import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const headerStyle = css({
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: Theme.color.white,
  borderBottom: `1px solid ${Theme.color.border}`,
});

export const headerBoxStyle = css({
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 196px",
  height: "85px",
  margin: "0 auto",
  width: "1536px",

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
