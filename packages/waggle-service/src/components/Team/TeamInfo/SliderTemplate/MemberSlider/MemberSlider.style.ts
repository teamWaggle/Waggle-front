import { css } from "@emotion/react";

export const memberSliderBoxStyle = (currentIndex: number) =>
  css({
    width: "760px",
    height: "fit-content",
    gap: "10px",
    display: "grid",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 190}px)`,
    gridTemplateColumns: "repeat(auto-fit, 180px)",
    gridAutoFlow: "column",
  });
