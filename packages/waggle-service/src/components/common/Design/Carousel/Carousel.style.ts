import { css } from "@emotion/react";

export const carouselStyle = (width: number, height: number, borderRadius: string) =>
  css({
    position: "relative",
    width,
    height,
    minWidth: width,
    minHeight: height,
    borderRadius,
    overflow: "hidden",

    "& *": {
      userSelect: "none",
    },
  });

export const carouselBoxStyle = css({
  display: "flex",
  overflow: "hidden",
});

export const carouselItemStyle = (width: number, height: number) =>
  css({
    display: "flex",

    "& > *": {
      objectFit: "cover",
      width,
      height,
    },
  });

export const buttonBoxStyle = css({
  "& > button": {
    position: "absolute",
    top: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "28px",
    height: "28px",
    border: "none",
    borderRadius: "50%",
    outline: "none",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
});

export const leftButtonStyle = css({
  left: "20px",
});

export const rightButtonStyle = css({
  right: "20px",
});
