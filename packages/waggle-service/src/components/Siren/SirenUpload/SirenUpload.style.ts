import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  maxWidth: "1536px",
  margin: "0 auto",
  padding: "0 196px 132px",
  marginTop: "70px",
});

export const inputStyle = css({
  all: "unset",
  fontSize: "26px",
  color: Theme.color.text,
  marginTop: "56px",
  paddingBottom: "8px",
  width: "100%",
  borderBottom: `1px solid ${Theme.color.divider_gray}`,

  "&::place-holder": {
    color: Theme.color.disabled_text,
  },
});

export const buttonBoxStyle = css({
  float: "right",
  marginTop: "50px",
});
