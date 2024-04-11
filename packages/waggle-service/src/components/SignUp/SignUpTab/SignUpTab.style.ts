import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const headingStyle = css({
  color: Theme.color.text,
  fontWeight: 600,
  marginTop: "14px",
});

export const boxStyle = css({
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
  position: "relative",

  "&:after": {
    position: "absolute",
    top: "25px",
    left: "81px",
    content: "''",
    width: "126px",
    height: "1px",
    backgroundColor: Theme.color.border,
  },

  "&:last-of-type::after": {
    content: "none",
  },
});

export const getCircleBoxStyle = (disabled: boolean) =>
  css({
    justifyContent: "center",
    alignItems: "center",
    width: "25px",
    height: "25px",
    backgroundColor: disabled ? Theme.color.brand_primary : Theme.color.border,
    color: Theme.color.white,
    borderRadius: "50%",
  });

export const circleNumberStyle = css({
  textAlign: "center",
  fontFamily: "Montserrat",
  fontWeight: 600,
});

export const getCircleTextStyle = (disabled: boolean) => {
  return css({
    color: disabled ? Theme.color.text : Theme.color.disabled_text,
    fontWeight: 600,
  });
};
