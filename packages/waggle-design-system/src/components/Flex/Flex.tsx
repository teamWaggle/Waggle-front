import type { ComponentPropsWithoutRef, ElementType } from "react";

import type { FlexStylingProps } from "@/components/Flex/Flex.style";
import { flexStyle } from "@/components/Flex/Flex.style";

export interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  tag?: ElementType;
  styles?: FlexStylingProps;
}

const Flex = ({ tag = "div", styles = {}, children, ...attributes }: FlexProps) => {
  const Tag = tag;

  return (
    <Tag css={flexStyle(styles)} {...attributes}>
      {children}
    </Tag>
  );
};

export default Flex;
