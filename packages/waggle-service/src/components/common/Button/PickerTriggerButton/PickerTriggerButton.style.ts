import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const PickerTriggerButtonStyle = css({
  border: `1px solid ${Theme.color.border}`,
  padding: "8px 7px",
  borderRadius: "4px",
  color: Theme.color.readonly_text,
  minWidth: "100px",
  maxWidth: "140px",
  textAlign: "center",
});
