import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const emptyMemberTeamStyle = css({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "100px 0",
});
export const questionIconStyle = css({
  width: "60px",
  height: "60px",
  "& > path": {
    fill: Theme.color.disabled_text,
  },
  marginBottom: "10px",
});

export const emptyMemberTeamTextStyle = css({
  color: Theme.color.disabled_text,
  fontSize: "18px",
  fontWeight: 600,
});
