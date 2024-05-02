import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const sectionStyle = css({
  height: "700px",
  minWidth: "1536px",
  maxWidth: "100%",
  padding: "0 196px",
  backgroundColor: Theme.color.brand_primary,
});

export const textStyle = css({
  color: Theme.color.white,
  margin: "26px 69px",
  fontWeight: "700",
});
