import type { ComponentPropsWithoutRef, ElementType, ForwardedRef } from "react";
import { forwardRef } from "react";

import { flexStyle } from "@/components/Flex/Flex.style";

import type { FlexStylingProps } from "@/components/Flex/Flex.style";

export interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  tag?: ElementType;
  styles?: FlexStylingProps;
}

const Flex = (
  { tag = "div", styles = {}, children, ...attributes }: FlexProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const Tag = tag;

  return (
    <Tag css={flexStyle(styles)} {...attributes} ref={ref}>
      {children}
    </Tag>
  );
};

export default forwardRef(Flex);
