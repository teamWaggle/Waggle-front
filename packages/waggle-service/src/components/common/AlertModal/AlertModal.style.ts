import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const alertModalBoxStyle = css({
  backgroundColor: Theme.color.white,
  borderRadius: "12px",
  width: "500px",
  padding: "56px 20px 24px",
});

export const alertModalButtonStyle = css({
  width: "100%",
  padding: "16px 0",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: Theme.color.disabled_text,
  borderRadius: "4px",
  color: Theme.color.white,
  fontSize: "14px",
  fontWeight: 500,
});

export const alertModalConfirmButtonStyle = (isConfirm: boolean) =>
  css({
    width: "100%",
    padding: "16px 0",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: isConfirm ? Theme.color.brand_primary : Theme.color.disabled_text,
    borderRadius: "4px",
    color: Theme.color.white,
    fontSize: "14px",
    fontWeight: 500,
  });
