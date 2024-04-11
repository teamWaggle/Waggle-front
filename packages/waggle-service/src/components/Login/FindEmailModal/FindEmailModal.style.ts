import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  flexDirection: "column",
  alignItems: "center",
  gap: "60px",
  backgroundColor: Theme.color.white,
  borderRadius: "8px",
  padding: "62px 65px",
  width: "460px",
});

export const headingStyle = css({
  color: Theme.color.text,
  fontWeight: 600,
  fontSize: "22px",
});

export const textStyle = css({
  color: Theme.color.text,
  fontWeight: 500,
  textAlign: "center",
});

export const formTextStyle = css({
  color: Theme.color.text,
  fontWeight: 600,
  paddingLeft: "8px",
});

export const inputStyle = css({
  width: "330px",
  height: "44px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
  padding: "0 18px",
  color: Theme.color.input_text,
  fontWeight: 500,
  fontSize: "16px",

  "&::placeholder": {
    color: Theme.color.border,
  },
});

export const resultBoxStyle = css({
  width: "331px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
  padding: "16px 77px",
  textAlign: "center",
});

export const passwordIconStyle = css({
  position: "absolute",
  bottom: "13px",
  right: "18px",
  cursor: "pointer",
});
