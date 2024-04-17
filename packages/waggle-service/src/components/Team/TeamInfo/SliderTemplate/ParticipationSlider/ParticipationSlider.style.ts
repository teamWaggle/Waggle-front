import { css } from "@emotion/react";

export const participationSliderBoxStyle = (currentIndex: number) =>
  css({
    width: "740px",
    height: "fit-content",
    gap: "10px",
    display: "grid",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 247}px)`,
    gridTemplateColumns: "repeat(auto-fit, 1fr)",
    gridAutoFlow: "column",
  });
