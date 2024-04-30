import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const boxStyle = css({
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
  borderRadius: "2px",
  border: `1px solid ${Theme.color.border}`,
  padding: "60px",
});
