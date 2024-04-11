import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imgStyle = css({
  width: "148px",
  height: "148px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const getNicknameTextStyle = (isComplete: boolean) => {
  return css({
    color: isComplete ? Theme.color.brand_primary : Theme.color.btn_danger,
    fontWeight: 500,
  });
};

export const addressInputStyle = css({
  all: "unset",
  boxSizing: "border-box",
  width: "220px",
  borderBottom: `1px solid ${Theme.color.border}`,
  color: Theme.color.input_text,
  fontWeight: 500,
  fontSize: "16px",

  "&::placeholder": {
    color: Theme.color.disabled_text,
  },
});
