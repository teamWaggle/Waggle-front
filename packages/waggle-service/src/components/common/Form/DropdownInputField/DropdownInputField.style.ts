import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const dropdownBoxStyle = css({
  position: "relative",
  width: "fit-content",
  height: "34px",
  flexShrink: 0,
});

export const dropdownButtonStyle = css({
  width: "100%",
  height: "100%",
  border: `1px solid ${Theme.color.gray400}`,
  borderRadius: "20px",
  padding: "6px 14px",
  color: Theme.color.gray400,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "18px",
});

export const dropdownListStyle = css({
  position: "absolute",
  border: `1px solid ${Theme.color.border}`,
  backgroundColor: Theme.color.white,
  flexDirection: "column",
  top: "40px",
  left: "0",
});

export const dropdownItemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "28px",
  padding: "14px 16px",
  "&:hover": {
    backgroundColor: Theme.color.gray100,
  },
});

export const dropdownItemTitleStyle = css({
  width: "100%",
});

export const dropdownItemTextStyle = css({
  display: "flex",
  gap: "4px",
  alignItems: "center",
  fontSize: "18px",
  fontFamily: "Pretendard",
  fontWeight: 400,
  color: Theme.color.gray400,
});

export const dropdownItemDescriptionStyle = css({
  fontSize: "12px",
  color: Theme.color.gray400,
  width: "fit-content",
  whiteSpace: "nowrap",
  marginTop: "4px",
  marginLeft: "22px",
});

export const dropdownSelectedItemStyle = (checked: boolean) =>
  css({
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: `${checked ? "3px" : "1px"} solid ${Theme.color.gray400}`,
  });
