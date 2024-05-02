import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const boxStyle = css({
  padding: "2px 6px 2px 12px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
  cursor: "pointer",
  height: "34px",
  width: "89px",
});

export const innerBoxStyle = css({
  position: "absolute",
  top: "calc(100% + 4px)",
  zIndex: 1,
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
  cursor: "pointer",
  backgroundColor: Theme.color.white,

  "& > div": {
    padding: "2px 6px 2px 12px",
    height: "34px",
    width: "87px",
    cursor: "pointer",
    borderBottom: `1px solid ${Theme.color.border}`,

    "&:last-of-type": {
      borderBottom: "none",
    },
  },
});
