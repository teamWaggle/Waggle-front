import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const loginBoxStyle = css({
  borderRadius: "14px",
  border: `1px solid ${Theme.color.brand_primary}`,
  padding: "30px 22px",
  boxShadow: Theme.boxShadow.shadow2,
});

export const buttonStyle = css({
  padding: "12px 58px",
  borderRadius: "6px",
  backgroundColor: Theme.color.brand_primary,
  cursor: "pointer",
  border: "none",
  outline: "none",
});

export const subTextStyle = css({
  color: Theme.color.readonly_text,
  fontWeight: 500,
  cursor: "pointer",
});
