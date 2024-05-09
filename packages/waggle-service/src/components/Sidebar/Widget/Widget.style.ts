import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const boxStyle = css({
  padding: "32px 0 26px",
  border: `1px solid ${Theme.color.brand_primary}`,
  borderRadius: "14px",
  boxShadow: Theme.boxShadow.shadow2,
  width: "310px",
});

export const titleStyle = css({
  color: Theme.color.brand_primary,
  fontFamily: "Montserrat",
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: "16px",
});
