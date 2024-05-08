import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const listBoxStyle = css({
  position: "absolute",
  bottom: "calc(100% + 16px)",
  left: 0,
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "10px",
  width: "188px",
  backgroundColor: Theme.color.white,
  zIndex: 1,

  "& > svg": {
    position: "absolute",
    right: "8px",
    top: "8px",
    cursor: "pointer",
  },

  "& > p": {
    textAlign: "center",
    fontWeight: 500,
  },
});

export const titleBoxStyle = css({
  padding: "4px 8px",
  borderBottom: `1px solid ${Theme.color.border}`,
});

export const contentBoxStyle = css({
  overflow: "auto",
  maxHeight: "270px",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  padding: "8px",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const profileImgStyle = css({
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  cursor: "pointer",
});

export const nicknameStyle = css({
  color: Theme.color.text,
  fontWeight: 600,
  cursor: "pointer",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "120px",

  "&:hover": {
    opacity: "0.4",
  },
});
