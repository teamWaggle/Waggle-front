import type { ComponentPropsWithoutRef, ElementType, ForwardedRef } from "react";
import { forwardRef } from "react";

import { getBoxStyling } from "@/components/Box/Box.styles";

import type { BoxStylingProps } from "@/components/Box/Box.styles";

export interface BoxProps extends ComponentPropsWithoutRef<"div"> {
  tag?: ElementType;
  styles?: BoxStylingProps;
}

const Box = (
  { tag = "div", styles = {}, children, ...attributes }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const Tag = tag;

  return (
    <Tag css={getBoxStyling(styles)} {...attributes} ref={ref}>
      {children}
    </Tag>
  );
};

export default forwardRef(Box);
