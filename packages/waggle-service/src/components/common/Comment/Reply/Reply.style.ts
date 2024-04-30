import { css } from "@emotion/react";

export const replyCardBoxStyle = css({
  width: "100%",

  "& > img": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
  },
});

export const replyInputBoxStyle = css({
  position: "relative",
  width: "100%",
});
