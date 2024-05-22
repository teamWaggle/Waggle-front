import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const commentBoxStyle = css({
  maxWidth: "1536px",
  padding: "0 196px",
});

export const textareaBoxStyle = css({
  position: "relative",
  width: "100%",
});

export const commentTextareaStyle = css({
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  width: "100%",
  height: "112px",
  padding: "20px 74px 20px 20px",
  fontSize: "16px",
  fontWeight: 500,
  outline: "none",
  overflowWrap: "break-word",
  wordBreak: "break-all",
  whiteSpace: "pre-wrap",
  resize: "none",
  fontFamily: "Pretendard",
});

export const commentCardBoxStyle = css({
  width: "100%",

  "& > img": {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    cursor: "pointer",
  },
});

export const replyBoxStyle = css({
  top: 0,
  right: 0,
  color: Theme.color.readonly_text,
  fontWeight: 500,
  cursor: "pointer",
});

export const buttonBoxStyle = css({
  position: "absolute",
  bottom: "14px",
  right: "14px",
});
