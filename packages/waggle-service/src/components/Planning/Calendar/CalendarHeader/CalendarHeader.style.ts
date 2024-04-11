import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const textStyle = css({
  color: Theme.color.white,
  margin: "26px 69px",
  fontWeight: "700",
  minWidth: "170px",
  textAlign: "center",
});

export const flexStyle = css({
  alignItems: "center",
  margin: "0 auto",
  minWidth: "1128px",
  justifyContent: "center",
});
