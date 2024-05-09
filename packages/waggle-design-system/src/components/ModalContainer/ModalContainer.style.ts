import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const modalContainerStyle = () =>
  css({
    position: "absolute",

    top: "110%",
    left: 0,
    zIndex: 10,
    border: `1px solid ${Theme.color.border}`,
    borderRadius: "4px",
    backgroundColor: Theme.color.white,
    overflow: "auto",
  });
