import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const cardStyle = (isMyPage?: boolean) =>
  css({
    backgroundColor: "#FEFEFE",
    boxShadow: Theme.boxShadow.shadow3,
    borderRadius: "20px",
    cursor: "pointer",

    "& > img": {
      width: isMyPage ? "255px" : "270px",
      height: isMyPage ? "204px" : "224px",
      objectFit: "cover",
      borderRadius: "20px 20px 0 0",
    },
  });

export const tagBoxStyle = css({
  top: "10px",
  left: "16px",
});

export const infoStyle = (isMyPage?: boolean) =>
  css({
    borderRadius: "0 0 20px 20px",
    padding: "10px 16px 6px",
    width: isMyPage ? "255px" : "270px",

    "& > h6": {
      width: "238px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  });

export const subStyle = css({
  color: Theme.color.readonly_text,
  fontWeight: 600,
  marginTop: "6px",
});

export const textStyle = (isRecommend: boolean) =>
  css({
    color: isRecommend ? Theme.color.brand_primary : Theme.color.border,
    fontWeight: 600,
    marginTop: "6px",
  });
