import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "flex-start",
});

const informationStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  "& > h6": {
    color: Theme.color.disabled_text,
    fontSize: "12px",
    fontWeight: 400,
    textTransform: "uppercase",
  },
});

export { containerStyle, informationStyle };
