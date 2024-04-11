import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  flexDirection: "column",
  gap: "30px",
  marginTop: "80px",
  paddingLeft: "30px",
});

export const sliderLayoutStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  position: "relative",
});

export const sliderBoxStyle = (mediaLength: number) => {
  return css({
    width: `${mediaLength * 255 + (mediaLength - 1) * 10}px`,
    maxWidth: "789px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  });
};

export const sliderStyle = css({
  display: "flex",
  alignItems: "center",
  height: "100%",
  gap: "12px",
  paddingBottom: "6px",
});

export const arrowBoxStyle = css({
  all: "unset",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  display: "flex",
  backgroundColor: Theme.color.white,

  "& > svg > path": {
    fill: Theme.color.black,
  },

  "&.leftArrow": {
    left: "6px",
  },

  "&.rightArrow": {
    right: "6px",
  },
});
