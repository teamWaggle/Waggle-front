import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const cardStyle = (isMyPage?: boolean) =>
  css({
    backgroundColor: "#FEFEFE",
    boxShadow: Theme.boxShadow.shadow3,
    borderRadius: "20px",
    flexDirection: "column",
    position: "relative",
    cursor: "pointer",

    "& > img": {
      width: isMyPage ? "255px" : "270px",
      height: "224px",
      objectFit: "cover",
      borderRadius: "20px 20px 0 0",
    },
  });

export const tagBoxStyle = css({
  position: "absolute",
  top: "10px",
  left: "16px",
  alignItems: "center",
  gap: "10px",
});

export const infoStyle = css({
  borderRadius: "0 0 20px 20px",
  padding: "10px 16px 6px",
  width: "100%",
  flexDirection: "column",
});

export const subStyle = css({
  color: Theme.color.readonly_text,
  fontWeight: 600,
  marginTop: "6px",
});

export const bottomBoxStyle = css({
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "16px",
  width: "100%",
});

export const textStyle = (isRecommend: boolean) =>
  css({
    color: isRecommend ? Theme.color.brand_primary : Theme.color.border,
    fontWeight: 600,
    marginTop: "6px",
  });
