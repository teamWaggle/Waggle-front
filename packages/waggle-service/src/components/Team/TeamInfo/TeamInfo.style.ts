import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const teamSectionStyle = css({
  width: "100%",
});

export const teamImgStyle = css({
  borderRadius: "20px",
  width: "195px",
  height: "195px",
  objectFit: "cover",
  flexShrink: 0,
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

export const buttonIconStyle = css({
  "& > path": {
    stroke: Theme.color.white,
  },
  marginLeft: "4px",
});
