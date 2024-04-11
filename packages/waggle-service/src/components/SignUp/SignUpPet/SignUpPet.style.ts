import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const boxStyle = css({
  flexDirection: "column",
  gap: "40px",
  alignItems: "center",

  "& > h6": {
    color: Theme.color.text,
    fontWeight: 600,
    textAlign: "center",
  },
});

export const imgStyle = css({
  width: "148px",
  height: "148px",
  borderRadius: "10px",
  objectFit: "cover",
});

export const formLayoutStyle = css({
  flexDirection: "column",
  gap: "30px",
  borderRadius: "2px",
  border: `1px solid ${Theme.color.border}`,
  padding: "60px",
});

export const buttonLayoutStyle = css({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});
