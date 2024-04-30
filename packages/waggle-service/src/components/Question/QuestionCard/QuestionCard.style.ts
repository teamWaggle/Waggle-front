import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const cardStyle = css({
  backgroundColor: Theme.color.white,
  filter: "drop-shadow(0px 1px 13px rgba(0, 40, 37, 0.13))",
  borderRadius: "10px",
  padding: "18px 24px",
  width: "754px",
  height: "160px",
  cursor: "pointer",
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

    p: {
      fontWeight: 500,
      color: isRecommend ? Theme.color.brand_primary : Theme.color.btn_success,
      textAlign: "center",
    },
  });
