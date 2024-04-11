import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const textStyle = css({
  color: Theme.color.black,
  fontWeight: 500,
  margin: "20px 0",
});

export const inputStyle = css({
  all: "unset",
  fontSize: "18px",
  color: Theme.color.text,
  borderBottom: `1px solid ${Theme.color.border}`,
  width: "100%",
  paddingBottom: "4px",

  "&::place-holder": {
    color: Theme.color.disabled_text,
  },
});
