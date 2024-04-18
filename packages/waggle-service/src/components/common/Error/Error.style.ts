import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const layoutStyle = css({
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const headingStyle = css({
  marginTop: Theme.spacer.spacing6,
});

export const textStyle = css({
  width: "300px",
  marginTop: Theme.spacer.spacing3,
  textAlign: "center",
});
