import type { ComponentPropsWithoutRef } from "react";

import type { Size } from "@/types/common";

import { textStyle } from "@/components/Text/Text.style";

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  size?: Extract<Size, "xSmall" | "small" | "medium" | "large" | "xLarge">;
}

const Text = ({ size = "medium", children, ...attributes }: TextProps) => {
  return (
    <p css={textStyle(size)} {...attributes}>
      {children}
    </p>
  );
};

export default Text;
