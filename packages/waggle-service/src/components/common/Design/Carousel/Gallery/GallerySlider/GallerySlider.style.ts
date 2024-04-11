import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  position: "relative",
});

export const sliderBoxStyle = (mediaLength: number) => {
  return css({
    width: `${mediaLength * 106 + (mediaLength - 1) * 12}px`,
    maxWidth: "578px",
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
});

export const imgBoxStyle = css({
  width: "106px",
  height: "106px",
  position: "relative",
});

export const imgStyle = css({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  cursor: "pointer",
});

export const closeIconBoxStyle = css({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: "4px",
  top: "4px",
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
