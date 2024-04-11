import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleStyle = css({
  color: Theme.color.brand_primary,
  fontFamily: "Montserrat",
  fontSize: "22px",
  fontWeight: 600,
});

export const subStyle = css({
  color: Theme.color.text,
  fontFamily: "Pretendard",
  fontWeight: 600,
  margin: "16px 0 28px",
});

export const imgStyle = css({
  width: "68px",
  height: "68px",
  borderRadius: "8px",
});

export const textStyle = css({
  color: Theme.color.text,
  fontSize: "14px",
  lineHeight: "18px",
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "152px",
  height: "36px",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
});

export const subTextStyle = css({
  color: Theme.color.readonly_text,
  fontSize: "9px",
  lineHeight: "11px",
});

export const tagStyle = css({
  position: "absolute",
  top: "-14px",
  left: "-16px",
  backgroundColor: Theme.color.btn_02,
  borderRadius: "17px",
  padding: "4px 10px",
  color: Theme.color.text,
  fontFamily: "Inter",
  fontWeight: "500",
});
