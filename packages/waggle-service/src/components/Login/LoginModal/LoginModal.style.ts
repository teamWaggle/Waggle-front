import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  backgroundColor: Theme.color.white,
  borderRadius: "8px",
  padding: "70px 40px 0",
  width: "390px",
  height: "490px",
  flexDirection: "column",
  alignItems: "center",

  form: {
    flexDirection: "column",
    gap: "13px",
  },
});

export const inputStyle = css({
  width: "310px",
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

export const passwordIconStyle = css({
  position: "absolute",
  top: "13px",
  right: "18px",
  cursor: "pointer",
});

export const findTextStyle = css({
  color: Theme.color.readonly_text,
  fontWeight: 500,
  textDecoration: "underline",
  position: "relative",
  cursor: "pointer",

  "&:after": {
    position: "absolute",
    top: "5px",
    right: "-12px",
    content: "''",
    width: "1px",
    height: "11px",
    backgroundColor: Theme.color.readonly_text,
  },

  "&:last-of-type::after": {
    content: "none",
  },
});
