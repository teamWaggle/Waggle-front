import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const layoutStyle = css({
  boxShadow: "box-shadow: 0px 2px 7px 0px rgba(0, 40, 37, 0.10)",
  padding: "30px 36px",
  borderRadius: "14px",
  border: `1px solid ${Theme.color.brand_primary}`,
  width: "100%",

  "& > h5": {
    fontWeight: 700,
    color: Theme.color.text,
  },
});
