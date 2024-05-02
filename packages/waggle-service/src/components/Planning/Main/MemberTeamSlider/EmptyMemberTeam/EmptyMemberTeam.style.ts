import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

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
