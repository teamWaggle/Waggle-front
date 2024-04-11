import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  borderRadius: Theme.spacer.spacing3_5,
  border: `1px solid ${Theme.color.brand_primary}`,
  boxShadow: Theme.boxShadow.shadow2,
  width: "310px",
  height: "106px",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px",

  "& > img": {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  },
});

export const nicknameStyle = css({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: Theme.color.text,
  width: "120px",
  fontWeight: 700,
});

export const buttonBoxStyle = css({
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  width: "60px",
  height: "22px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "10px",
  cursor: "pointer",
});

export const buttonTextStyle = css({
  fontSize: "10px",
  color: Theme.color.readonly_text,
});
