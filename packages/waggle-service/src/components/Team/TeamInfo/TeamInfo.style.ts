import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const teamSectionStyle = css({
  marginTop: "50px",
  width: "100%",
  alignItems: "center",
});

export const teamImgStyle = css({
  borderRadius: "20px",
  width: "195px",
  height: "195px",
  objectFit: "cover",
});

export const teamInfoBoxStyle = css({
  marginLeft: "20px",
  width: "100%",
});

export const teamInfoSubTitleStyle = css({
  marginTop: "10px",
  marginBottom: "10px",
  color: Theme.color.text,
});

export const teamInfoNewApplyStyle = css({
  color: Theme.color.btn_danger,
});

export const memberSliderBoxStyle = (currentIndex: number) =>
  css({
    width: "760px",
    height: "fit-content",
    gap: "10px",
    display: "grid",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 190}px)`,
    gridTemplateColumns: "repeat(auto-fit, 1fr)",
    gridAutoFlow: "column",
  });

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

export const rightArrowIconStyle = css({
  position: "absolute",
  right: "-3%",
  top: "10%",
  cursor: "pointer",
});
export const leftArrowIconStyle = css({
  position: "absolute",
  left: "-4%",
  top: "10%",

  cursor: "pointer",
});
