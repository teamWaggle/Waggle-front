import type { ComponentPropsWithoutRef, ElementType } from "react";

import { getBoxStyling } from "@/components/Box/Box.styles";

import type { BoxStylingProps } from "@/components/Box/Box.styles";

export interface BoxProps extends ComponentPropsWithoutRef<"div"> {
  tag?: ElementType;
  styles?: BoxStylingProps;
}

const Box = ({ tag = "div", styles = {}, children, ...attributes }: BoxProps) => {
  const Tag = tag;

  return (
    <Tag css={getBoxStyling(styles)} {...attributes}>
      {children}
    </Tag>
  );
};

export default Box;
