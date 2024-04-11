import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleBoxStyle = css({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "6px",
});

export const titleStyle = css({
  gap: "8px",
  alignItems: "center",

  "& > p": {
    fontWeight: 600,
    color: Theme.color.text,
  },
});

export const infoBoxStyle = css({
  gap: "18px",

  "& > p": {
    fontWeight: 500,
    color: Theme.color.readonly_text,
  },
});
