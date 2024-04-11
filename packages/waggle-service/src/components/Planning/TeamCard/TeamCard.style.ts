import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { TeamColorType } from "@/types/team";

export const boxStyle = css({
  border: `2px solid ${Theme.color.brand_primary}`,
  borderRadius: "20px",
  height: "327px",
  width: "270px",
  cursor: "pointer",
});

export const imgStyle = css({
  objectFit: "cover",
  width: "100%",
  height: "200px",
  borderRadius: "18px 18px 0px 0px",
});

export const textBoxStyle = css({
  padding: "8px 16px 0px",
});

export const circleDivStyle = (color: TeamColorType) =>
  css({
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: Theme.color[color],
    boxShadow: "none", // Add the boxShadow property with an appropriate value
  });

export const textStyle = (color: TeamColorType) =>
  css({
    color: Theme.color[color],
    fontWeight: "bold",
  });
export const subtitleTextStyle = css({
  color: Theme.color.readonly_text,
  marginBottom: "8px",
  height: "40px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  width: "100%",
});
export const groupCountTextStyle = css({ color: Theme.color.disabled_text });
