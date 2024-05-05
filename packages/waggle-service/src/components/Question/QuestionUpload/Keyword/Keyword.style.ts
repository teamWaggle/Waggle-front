import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const infoIconStyle = css({
  cursor: "pointer",
});

export const keywordButtonBoxStyle = css({
  width: "30px",
  height: "30px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25)",
});
