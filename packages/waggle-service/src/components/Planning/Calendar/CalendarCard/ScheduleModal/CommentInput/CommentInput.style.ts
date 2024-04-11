import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const commentBoxStyle = css({
  width: "100%",
  height: "100%",
  overflowY: "auto",
  marginTop: "8px",
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
    fontSize: 16,
    fontWeight: "normal",
  },
  highlighter: {
    padding: 9,
    marginLeft: "4px",
    border: "1px solid transparent",
    color: "transparent",
  },
  width: "330px",
  height: "32px",
  input: {
    color: Theme.color.text,
    width: "100%",
    padding: "4px 8px",
    outline: "none",
    letterSpacing: "0.5px",
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
      fontSize: 14,
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
  letterSpacing: "0.5px",
  borderRadius: "4px",
};

export const mentionImageStyle = css({
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  marginRight: "8px",
});
