import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const cardStyle = css({
  backgroundColor: Theme.color.white,
  filter: "drop-shadow(0px 1px 13px rgba(0, 40, 37, 0.13))",
  borderRadius: "10px",
  padding: "18px 24px",
  position: "relative",
  width: "754px",
  height: "160px",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
});

export const resolveStyle = (isResolve: boolean) =>
  css({
    backgroundColor: isResolve ? Theme.color.btn_success : Theme.color.btn_danger,
    color: Theme.color.text,
    padding: "6px 10px",
    borderRadius: "18px",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
  });

export const kewordBoxStyle = css({
  gap: "18px",
  color: Theme.color.black,
  fontWeight: 600,
});

export const contentBoxStyle = css({
  textOverflow: "ellipsis",
  overflow: "hidden",
  wordBreak: "break-word",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  color: Theme.color.text,
  fontWeight: 500,
});

export const iconStyle = (isRecommend: boolean) =>
  css({
    position: "absolute",
    top: "18px",
    right: "24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",

    "& > p": {
      fontWeight: 500,
      color: isRecommend ? Theme.color.brand_primary : Theme.color.btn_success,
    },
  });
