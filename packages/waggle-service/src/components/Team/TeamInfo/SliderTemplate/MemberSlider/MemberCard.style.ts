import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const memberCardBoxStyle = css({
  height: "32px",
  width: "180px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
});

export const memberCardImgStyle = css({
  height: "18px",
  width: "18px",
  marginLeft: "8px",
  borderRadius: "50%",
  marginRight: "6px",
});

export const modalPositionBoxStyle = (displayCount: number, index: number) =>
  css({
    position: "absolute",
    left: `${(index % displayCount) * 190 + 240}px`,
    bottom: "35px",
  });

export const nicknameStyle = css({
  fontSize: "14px",
  color: Theme.color.text,
  marginLeft: "8px",
  marginRight: "auto",
});
