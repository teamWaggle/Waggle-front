import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const participationCardNameStyle = css({
  height: "32px",
  width: "150px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.btn_danger}`,
});
export const participationCardImgStyle = css({
  height: "18px",
  width: "18px",
  marginLeft: "8px",
  borderRadius: "50%",
  marginRight: "6px",
});

export const participationCardTextStyle = css({
  marginRight: "16px",
});

export const approveButtonStyle = css({
  width: "40px",
  height: "32px",
  borderRadius: "4px",
  backgroundColor: Theme.color.btn_danger,
  color: Theme.color.white,
  border: "none",
  cursor: "pointer",
});

export const rejectButtonStyle = css({
  width: "40px",
  height: "32px",
  borderRadius: "4px",
  backgroundColor: Theme.color.disabled_text,
  color: Theme.color.white,
  border: "none",
  cursor: "pointer",
});
