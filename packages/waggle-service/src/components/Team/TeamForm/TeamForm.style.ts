import { css } from "@emotion/react";

import { Theme } from "waggle-design-system";

export const headingStyle = css({
  color: Theme.color.brand_primary,
  fontWeight: 600,
  width: "fit-content",
});

export const leftArrowIconStyle = css({
  cursor: "pointer",
});

export const imageBoxStyle = (isFile: boolean) =>
  css({
    display: "flex",
    backgroundColor: isFile ? "none" : Theme.color.brand_primary,
    width: "200px",
    height: "200px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    cursor: "pointer",
    objectFit: "cover",
  });

export const teamContentBox = css({
  marginTop: "40px",
  height: "225px",
});

export const textInputBoxStyle = css({
  maxWidth: "800px",
});

export const colorTitleStyle = css({
  color: Theme.color.text,
  fontSize: "24px",
  fontWeight: 600,
  marginTop: "40px",
  marginBottom: "20px",
});

export const submitButtonStyle = css({
  width: "100px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "40px",
  marginLeft: "auto",
  border: "none",
  borderRadius: "4px",
  color: Theme.color.white,
  backgroundColor: Theme.color.brand_primary,
});

export const titleTextInputStyle = css({
  width: "100%",
  height: "40px",
  padding: "12px",
  marginTop: "20px",
  color: Theme.color.input_text,
  border: "none",
  fontSize: "24px",
  outline: "none",
  borderBottom: `2px solid  ${Theme.color.gray200}`,
  resize: "none",
});

export const contentTextareaStyle = css({
  width: "100%",
  height: "100%",
  padding: "0 12px",
  marginTop: "20px",
  color: Theme.color.input_text,
  fontSize: "16px",
  outline: "none",
  borderRadius: "6px",
  border: `2px solid ${Theme.color.gray200}`,
  resize: "none",
});

export const deleteTeamTextStyle = css({
  cursor: "pointer",
  color: Theme.color.gray300,
  fontSize: "16px",
  marginTop: "20px",
  width: "fit-content",
  justifyContent: "center",
});
