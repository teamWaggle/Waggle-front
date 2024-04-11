import { css } from "@emotion/react";

import type { ButtonProps } from "@/components/Button/Button";

import { Theme } from "@/styles/Theme";

export const buttonVariantStyle = (variant: Required<ButtonProps>["variant"]) => {
  const style = {
    default: css({
      backgroundColor: Theme.color.brand_primary,
      color: Theme.color.white,
    }),
    disabled: css({
      backgroundColor: Theme.color.disabled_text,
      color: Theme.color.white,
    }),
    outline: css({
      backgroundColor: Theme.color.white,
      color: Theme.color.disabled_text,
      border: `1px solid ${Theme.color.border}`,
      height: "44px",
    }),
    white: css({
      backgroundColor: Theme.color.white,
      color: Theme.color.brand_primary,
    }),
    danger: css({
      backgroundColor: Theme.color.btn_danger,
      color: Theme.color.white,
    }),
  };

  return style[variant];
};

export const buttonSizeStyle = (size: Required<ButtonProps>["size"]) => {
  const style = {
    small: css({
      padding: "8px 10px",
    }),
    medium: css({
      width: "310px",
      height: "44px",
    }),
    large: css({
      width: "331px",
      height: "44px",
    }),
    xLarge: css({
      width: "412px",
      height: "44px",
    }),
  };

  return style[size];
};

export const buttonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "4px",
  outline: "none",
  backgroundColor: Theme.color.white,
  fontWeight: 500,
  fontSize: Theme.text.medium.fontSize,
  cursor: "pointer",
  fontFamily: "Pretendard",

  "&:disabled": {
    opacity: ".4",
  },
});
