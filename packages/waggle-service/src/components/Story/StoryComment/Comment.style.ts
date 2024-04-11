import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const getCommentTextStyle = css({
  color: Theme.color.text,
  fontWeight: 500,
  marginTop: "-6px",
  wordWrap: "break-word",
});

export const handleCommentTextStyle = css({
  cursor: "pointer",
  color: Theme.color.readonly_text,
  fontWeight: 500,
});

export const commentInputStyle = (width: string) => {
  return css({
    all: "unset",
    boxSizing: "border-box",
    borderBottom: `1px solid ${Theme.color.brand_primary}`,
    padding: "8px 30px 8px 0",
    color: Theme.color.black,
    fontSize: "12px",
    fontWeight: 500,
    width: width,

    "&::placeholder": {
      color: Theme.color.disabled_text,
    },
  });
};

export const replyButtonStyle = css({
  all: "unset",
  fontSize: "14px",
  fontWeight: 600,
  color: Theme.color.brand_primary,
  position: "absolute",
  right: 0,
  bottom: "8px",
  cursor: "pointer",
});

export const replyDateTextStyle = css({
  fontSize: "10px",
  lineHeight: "12px",
  fontWeight: 500,
  color: Theme.color.readonly_text,
  marginTop: "4px",
});
