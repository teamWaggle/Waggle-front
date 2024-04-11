import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const headerStyle = css({
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: Theme.color.white,
  borderBottom: `1px solid ${Theme.color.border}`,
});

export const logoStyle = css({
  cursor: "pointer",
});

export const textStyle = css({
  color: Theme.color.black,
  fontFamily: "Montserrat",
  fontWeight: 600,
  cursor: "pointer",
});
