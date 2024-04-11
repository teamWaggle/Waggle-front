import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const PickerTriggerButtonBoxStyle = css({
  borderRadius: "2px",

  alignItems: "center",
  position: "relative",
});

export const PickerTriggerButtonStyle = css({
  border: `1px solid ${Theme.color.border}`,
  padding: "4px 6px",
  color: Theme.color.readonly_text,
});
