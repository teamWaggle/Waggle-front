import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const radioLabelStyle = css({
  width: "24px",
  height: "24px",
  backgroundColor: Theme.color.white,
  border: `2px solid #b5b5b5`,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > div": {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: Theme.color.brand_primary,
  },
});

export const radioButtonStyle = css({
  display: "none",
});
