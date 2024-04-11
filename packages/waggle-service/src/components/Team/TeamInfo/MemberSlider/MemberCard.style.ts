import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const memberCardBoxStyle = css({
  height: "32px",
  width: "180px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
});

export const memberCardImgStyle = css({
  height: "18px",
  width: "18px",
  marginLeft: "8px",
  borderRadius: "50%",
  marginRight: "6px",
});
