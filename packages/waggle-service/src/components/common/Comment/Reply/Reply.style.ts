import { css } from "@emotion/react";

export const replyCardBoxStyle = css({
  position: "relative",
  width: "100%",
  gap: "14px",

  "& > img": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
});

export const moreButtonStyle = css({
  cursor: "pointer",
  position: "absolute",
  right: 0,
});
