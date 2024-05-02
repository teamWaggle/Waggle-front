import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const layoutStyle = css({
  padding: "80px 30px 0 0",

  li: {
    cursor: "pointer",
  },
});

export const profileInfoBoxStyle = css({
  "& > img": {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  p: {
    marginTop: "8px",
  },

  span: {
    "&:first-of-type": {
      marginRight: "30px",
    },
  },
});

export const menuItemStyle = (isActive: boolean) =>
  css({
    "& > div": {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      backgroundColor: isActive ? Theme.color.brand_primary : Theme.color.disabled_text,
    },

    "& > p": {
      fontWeight: 600,
      color: isActive ? Theme.color.brand_primary : Theme.color.disabled_text,
    },
  });
