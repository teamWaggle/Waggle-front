import { css } from "@emotion/react";
import { keyframes } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { SpinnerProps } from "@/components/Spinner/Spinner";

export const spinnerRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinnerStyle = ({ size, width }: Required<SpinnerProps>) =>
  css({
    display: "inline-block",
    width: `${size}px`,
    height: `${size}px`,
    border: `${width}px solid ${Theme.color.gray200}`,
    borderBottomColor: Theme.color.brand_primary,
    borderRadius: "50%",
    animation: `${spinnerRotation} 1s linear infinite`,
  });
