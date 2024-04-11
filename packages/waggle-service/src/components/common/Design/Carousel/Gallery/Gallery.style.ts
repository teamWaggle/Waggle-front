import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const galleryIconBoxStyle = css({
  display: "flex",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "24px",
  right: "24px",
  cursor: "pointer",
  zIndex: 1,
});

export const galleryBoxStyle = css({
  gap: "24px",
  alignItems: "center",
  height: "134px",
  padding: "14px",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  position: "absolute",
  bottom: "60px",
  right: 0,

  "& > input": {
    display: "none !important",
  },
});

export const galleryPlusIconBoxStyle = css({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: `1px solid ${Theme.color.border}`,
  marginRight: "12px",
  cursor: "pointer",
});
