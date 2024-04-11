import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  boxShadow: "box-shadow: 0px 2px 7px 0px rgba(0, 40, 37, 0.10)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 36px",
  borderRadius: "14px",
  border: `1px solid ${Theme.color.brand_primary}`,
  width: "100%",
  gap: "20px",

  "& > h5": {
    fontWeight: 700,
    color: Theme.color.text,
  },
});

export const listBoxStyle = css({
  color: Theme.color.readonly_text,
  fontWeight: 500,
  justifyContent: "space-between",
  width: "100%",
});
