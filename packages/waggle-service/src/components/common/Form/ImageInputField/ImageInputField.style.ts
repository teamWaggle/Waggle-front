import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imageInputBoxStyle = css({
  display: "block",

  gap: "4px",
  width: "200px",
  height: "200px",
});

export const imageInputStyle = css({
  display: "none",
  width: "100%",
  height: "100%",
});

export const imageBoxStyle = (isFile: boolean) =>
  css({
    display: "flex",
    backgroundColor: isFile ? "none" : Theme.color.brand_primary,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    cursor: "pointer",
    objectFit: "fill",
  });
export const imageStyle = css({
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "20px",
});
export const resetImageButtonStyle = css({
  color: Theme.color.white,
  cursor: "pointer",
  backgroundColor: Theme.color.brand_primary,
  width: "100%",
  justifyContent: "center",
  borderRadius: "20px",
  marginTop: "4px",
});
