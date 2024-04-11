import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const buttonStyle = css({
  all: "unset",
  boxSizing: "border-box",
  width: "104px",
  height: "44px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  textAlign: "center",
  cursor: "pointer",
});

export const getPasswordTextStyle = (disabled: boolean) => {
  return css({
    color: disabled ? Theme.color.brand_primary : Theme.color.disabled_text,
    fontWeight: 500,
  });
};
