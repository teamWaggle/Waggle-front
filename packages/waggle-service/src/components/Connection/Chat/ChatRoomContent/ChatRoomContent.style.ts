import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const chattingContentBoxStyle = css({
  padding: "30px 40px 20px",
  overflow: "auto",
  height: "530px",
});

export const inputBoxStyle = css({
  width: "100%",
  height: "90px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
  padding: "20px 0",
});

export const chattingInputStyle = css({
  width: "calc(100% - 124px)",
  height: "50px",
  borderRadius: "16px",
  border: `1px solid ${Theme.color.border}`,
  marginLeft: "40px",
  padding: "19px 24px",
  fontSize: Theme.text.large.fontSize,
  lineHeight: Theme.text.large.lineHeight,
  color: Theme.color.text,
  outline: "none",

  "&::placeholder": {
    color: Theme.color.border,
  },
});

export const buttonStyle = css({
  width: "50px",
  height: "50px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  outline: "none",
  backgroundColor: Theme.color.brand_primary,
  cursor: "pointer",
});
