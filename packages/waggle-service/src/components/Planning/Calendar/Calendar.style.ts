import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const containerStyle = css({
  position: "relative",
});

export const boxStyle = css({
  margin: "0 auto",
  display: "grid",
  gridGap: "1px",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  gridAutoRows: "minmax(50px, 200px)",
  width: "1128px",
  height: "535px",
  borderRadius: "16px",
  backgroundColor: Theme.color.border,
  "& > :first-of-type": {
    borderTopLeftRadius: "16px",
  },
  "& > :nth-of-type(7)": {
    borderTopRightRadius: "16px",
  },
  "& > :nth-last-of-type(7)": {
    borderBottomLeftRadius: "16px",
  },
  "& > :last-of-type": {
    borderBottomRightRadius: "16px",
  },
});
