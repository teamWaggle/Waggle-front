import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const titleBoxStyle = css({
  backgroundColor: Theme.color.readonly_text,
  padding: "30px 40px",
  borderRadius: "20px 20px 0 0",

  "& > p": {
    marginTop: "14px",
  },
});

export const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  padding: "30px 40px",
  borderRadius: "0 0 20px 20px",

  "& > form": {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "relative",
  },
});

export const titleInputStyle = (isPassword?: boolean) =>
  css({
    width: isPassword ? "240px" : "100%",
    height: "50px",
    border: `1px solid ${Theme.color.border}`,
    borderRadius: "16px",
    outline: "none",
    padding: "18px 24px",
    marginTop: "14px",
    fontSize: "18px",
    color: Theme.color.text,
    resize: "none",

    "&::placeholder": {
      color: Theme.color.border,
      fontFamily: "Pretendard",
    },
  });

export const radioLabelStyle = css({
  width: "24px",
  height: "24px",
  backgroundColor: Theme.color.white,
  border: `2px solid #b5b5b5`,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const radioButtonStyle = css({
  appearance: "none",
  width: "14px",
  height: "14px",
  borderRadius: "50%",

  "&:checked": {
    backgroundColor: Theme.color.brand_primary,
  },
});

export const buttonBoxStyle = css({
  position: "absolute",
  width: "100%",
  bottom: 0,

  "& > button": {
    width: "100%",
    height: "50px",
    borderRadius: "16px",
    border: "none",
    outline: "none",
    backgroundColor: Theme.color.brand_primary,
    color: Theme.color.white,
    fontSize: "18px",
    cursor: "pointer",

    "&.deleteButton": {
      backgroundColor: Theme.color.disabled_text,
    },

    "&:last-of-type": {
      marginTop: "18px",
    },
  },
});
