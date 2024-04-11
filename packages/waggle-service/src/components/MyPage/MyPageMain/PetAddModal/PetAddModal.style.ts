import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  flexDirection: "column",
  gap: "30px",
  borderRadius: "2px",
  padding: "60px",
  backgroundColor: Theme.color.white,
});

export const buttonStyle = css({
  all: "unset",
  padding: "8px 14px",
  borderRadius: "4px",
  backgroundColor: Theme.color.brand_primary,
  color: Theme.color.white,
  fontWeight: 600,
  cursor: "pointer",
  alignSelf: "flex-end",
});
