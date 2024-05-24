import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const commentBoxStyle = css({
  overscrollBehavior: "contain",
  overflowY: "auto",
});

export const commentInputStyle = css({
  width: "100%",
  height: "32px",
  border: "none",
  borderBottom: `1px solid ${Theme.color.brand_primary}`,
  color: Theme.color.text,
  outline: "none",
  padding: "0 8px",
});

export const commentSubmitButtonStyle = css({
  minWidth: "50px",
  height: "28px",
  border: "none",
  backgroundColor: Theme.color.brand_primary,
  color: Theme.color.white,
  cursor: "pointer",
  borderRadius: "4px",
  marginLeft: "8px",
});

export const mentionInputStyle = {
  control: {
    backgroundColor: "#fff",
    fontWeight: "normal",
  },
  highlighter: {
    border: "1px solid transparent",
    marginLeft: "4px",
    padding: "4px 12px",
    color: "transparent",
  },
  width: "100%",
  fontSize: 16,
  height: "32px",
  input: {
    color: Theme.color.text,
    width: "100%",
    padding: "4px 6px",
    outline: "none",
    border: "none",
    borderBottom: `2px solid ${Theme.color.brand_primary}`,
  },
  "&singleLine": {
    display: "inline-block",
    highlighter: {
      padding: 1,
      border: "2px inset transparent",
    },
  },

  suggestions: {
    borderRadius: "8px",
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 16,
      borderRadius: "8px",
      overflow: "hidden",
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        color: Theme.color.white,
        backgroundColor: Theme.color.brand_primary,
      },
    },
  },
};
export const mentionStyle = {
  backgroundColor: Theme.color.brand_primary,
  borderRadius: "4px",
  fontSize: 16,
};

export const mentionImageStyle = css({
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  marginRight: "8px",
});
