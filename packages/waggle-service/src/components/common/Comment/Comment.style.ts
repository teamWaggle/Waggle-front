import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const commentBoxStyle = css({
  maxWidth: "1536px",
  padding: "0 196px",
  margin: "60px auto 0",
  flexDirection: "column",
  gap: "60px",
});

export const commentTextareaStyle = (width: number, height: number) =>
  css({
    border: `1px solid ${Theme.color.border}`,
    borderRadius: "4px",
    width,
    height,
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
  position: "relative",
  width: "100%",
  gap: "14px",

  "& > img": {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
});

export const replyBoxStyle = css({
  alignItems: "center",
  gap: "16px",
  position: "absolute",
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

export const moreButtonStyle = css({
  cursor: "pointer",
  position: "relative",
});

export const menuStyle = css({
  position: "absolute",
  top: "-2px",
  left: "12px",
  width: "63px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "2px",

  "& > li": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: 600,
    backgroundColor: Theme.color.white,
    color: Theme.color.text,
    height: "22px",

    "&:last-of-type": {
      borderTop: `1px solid ${Theme.color.border}`,
    },
  },
});
