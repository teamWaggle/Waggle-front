import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const keywordBoxStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "20px",
  position: "relative",
});

export const infoIconStyle = css({
  cursor: "pointer",
});

export const keywordButtonBoxStyle = css({
  width: "30px",
  height: "30px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25)",
  cursor: "pointer",
});

export const tooltipBoxStyle = css({
  position: "absolute",
  top: "36px",
  width: "321px",
  height: "60px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "10px",
  boxShadow: "0px 2px 5px 0px rgba(0, 40, 37, 0.1)",
  backgroundColor: Theme.color.white,
  zIndex: 1,
  padding: "10px 14px",
});
