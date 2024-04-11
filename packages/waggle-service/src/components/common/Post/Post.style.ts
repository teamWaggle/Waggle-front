import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  maxWidth: "1536px",
  margin: "70px auto 0",
  padding: "0 196px",
  flexDirection: "column",
});

export const titleBoxStyle = css({
  flexDirection: "column",
  gap: "12px",
  marginBottom: "18px",
  position: "relative",
  width: "100%",
});

export const keywordBoxStyle = css({
  gap: "18px",
  color: Theme.color.black,
  fontWeight: 600,
});
