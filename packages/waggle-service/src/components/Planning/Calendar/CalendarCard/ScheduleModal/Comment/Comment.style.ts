import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const commentBoxStyle = css({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "4px",
  width: "100%",
  padding: "16px",
  overflowX: "hidden",
});

export const imgStyle = css({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginRight: "16px",
});

export const commentUserNameStyle = css({
  color: Theme.color.text,
});

export const commentTimeStyle = css({
  color: Theme.color.readonly_text,
});

export const commentTextBoxStyle = css({
  color: Theme.color.text,
  width: "100%",
});
