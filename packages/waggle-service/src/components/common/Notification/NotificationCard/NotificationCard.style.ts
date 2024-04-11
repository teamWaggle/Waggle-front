import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  boxShadow: "0px 2px 7px 0px rgba(0, 40, 37, 0.10)",
  backgroundColor: Theme.color.white,
  borderRadius: "14px",
  gap: "14px",
  border: `1px solid ${Theme.color.border}`,
  padding: "12px",
  width: "100%",
  alignItems: "center",

  "& > img": {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  "& > p": {
    color: Theme.color.readonly_text,
    fontWeight: 500,
    textOverflow: "ellipsis",
    overflow: "hidden",
    wordBreak: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
});
