import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const backdropStyle = (isUpper?: boolean) => {
  return css({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: isUpper ? 5 : 3,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(9, 4, 4, 0.53)",
    backdropFilter: isUpper ? "" : "blur(10px)",
  });
};

export const dialogStyle = (isUpper?: boolean) => {
  return css({
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: isUpper ? 6 : 4,
    display: "block",
    margin: "0 auto",
    backgroundColor: Theme.color.transparent,
    border: "none",
  });
};

export const closeButtonStyling = (isWhiteIcon?: boolean) => {
  return css({
    position: "absolute",
    right: "24px",
    top: "24px",
    cursor: "pointer",
    width: "16px",
    height: "16px",

    "& > g > line": {
      stroke: isWhiteIcon ? Theme.color.white : "",
    },
  });
};
