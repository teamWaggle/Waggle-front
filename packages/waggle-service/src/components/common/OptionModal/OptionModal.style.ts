import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const optionModalList = css({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${Theme.color.border}`,
  backgroundColor: Theme.color.white,
  borderRadius: "6px",
});

export const optiopnModalItemStyle = css({
  backgroundColor: Theme.color.white,
  border: "none",
  padding: "6px 10px",
  borderBottom: `1px solid ${Theme.color.border}`,
  cursor: "pointer",
  gap: "4px",
  align: "center",
  justify: "center",
  "&:first-of-type": {
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
  "&:hover": {
    backgroundColor: Theme.color.border,
  },
  "&:last-child": {
    borderBottom: "none",
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",
  },
});
