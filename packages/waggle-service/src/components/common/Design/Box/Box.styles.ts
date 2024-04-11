import { css } from "@emotion/react";

export interface BoxStylingProps {
  width?: string;
  height?: string;
  margin?: string;
  marginRight?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  backgroundColor?: string;
  color?: string;
  position?: "static" | "absolute" | "relative" | "fixed" | "inherit";
  boxShadow?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const getBoxStyling = ({
  width = "",
  height = "",
  margin = "",
  marginRight = "",
  marginTop = "",
  marginLeft = "",
  marginBottom = "",
  padding = "",
  paddingTop = "",
  paddingRight = "",
  paddingBottom = "",
  paddingLeft = "",
  border = "",
  borderRadius = "",
  borderColor = "",
  borderTop = "",
  borderRight = "",
  borderBottom = "",
  borderLeft = "",
  backgroundColor = "",
  color = "",
  position = "static",
  boxShadow = "",
  maxWidth = "",
  maxHeight = "",
}: BoxStylingProps) => {
  return css({
    width,
    height,
    margin,
    marginRight,
    marginTop,
    marginLeft,
    marginBottom,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    border,
    borderRadius,
    borderColor,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    backgroundColor,
    color,
    position,
    boxShadow,
    maxWidth,
    maxHeight,
  });
};
