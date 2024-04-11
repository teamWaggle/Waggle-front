import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  width: "400px",
  borderRadius: "12px",
  backgroundColor: Theme.color.white,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const buttonBoxStyle = css({
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",

  "& > button": {
    all: "unset",
    fontSize: "14px",
    color: Theme.color.text,
    width: "100%",
    height: "48px",
    borderTop: `1px solid ${Theme.color.border}`,
    textAlign: "center",
    cursor: "pointer",

    "&.deleteButton": {
      color: Theme.color.btn_danger,
    },
  },
});
