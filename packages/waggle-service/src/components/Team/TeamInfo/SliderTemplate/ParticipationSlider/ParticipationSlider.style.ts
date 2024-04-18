import { css } from "@emotion/react";

export const participationSliderBoxStyle = (currentIndex: number) =>
  css({
    width: "740px",
    height: "fit-content",
    gap: "10px",
    display: "grid",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 248}px)`,
    gridTemplateColumns: "repeat(auto-fit, 240px)",
    gridAutoFlow: "column",
  });
