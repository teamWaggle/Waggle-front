import { css } from "@emotion/react";

export const rightArrowIconStyle = css({
  position: "absolute",
  right: "-5%",
  top: "37%",
  cursor: "pointer",
});

export const leftArrowIconStyle = css({
  position: "absolute",
  left: "-5%",
  top: "37%",
  cursor: "pointer",
});

export const sliderBoxStyle = (currentIndex: number) =>
  css({
    width: "100%",
    height: "fit-content",
    gap: "20px",
    display: "grid",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 290}px)`,
    gridTemplateColumns: "repeat(auto-fill, 270px)",
    gridAutoFlow: "column",
  });
