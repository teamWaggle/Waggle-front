import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const searchStyle = (width: string) =>
  css({
    position: "relative",
    padding: "0 12px",
    borderRadius: "27.5px",
    border: `1px solid ${Theme.color.brand_primary}`,
    width: width,
    height: "34px",
    boxShadow: "0px 2px 5px 0px rgba(0, 40, 37, 0.1)",
  });

export const searchInputStyle = (width: string) => {
  return css({
    height: "32px",
    width: width,
    paddingRight: "20px",
    border: "none",
    outline: "none",
    borderRadius: "27.5px",
    background: Theme.color.transparent,
  });
};

export const searchButtonStyle = css({
  all: "unset",
  position: "absolute",
  top: "2px",
  right: "6px",
  cursor: "pointer",
});
