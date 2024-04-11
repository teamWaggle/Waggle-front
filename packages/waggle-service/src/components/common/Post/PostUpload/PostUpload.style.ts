import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const contentTextareaStyle = css({
  width: "536px",
  height: "466px",
  borderRadius: "20px",
  border: `1px solid ${Theme.color.border}`,
  outline: "none",
  padding: "34px",
  fontWeight: 500,
  fontSize: "20px",
  overflowWrap: "break-word",
  wordBreak: "break-all",
  whiteSpace: "pre-wrap",
  resize: "none",
  fontFamily: "Pretendard",

  "&::placeholder": {
    color: Theme.color.disabled_text,
  },
});
