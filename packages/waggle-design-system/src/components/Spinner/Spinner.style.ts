import { css } from "@emotion/react";
import { keyframes } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const spinnerRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinnerStyle = () =>
  css({
    display: "inline-block",
    width: "80px",
    height: "80px",
    border: `8px solid ${Theme.color.gray200}`,
    borderBottomColor: Theme.color.brand_primary,
    borderRadius: "50%",
    animation: `${spinnerRotation} 1s linear infinite`,
  });
