import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface DropdownButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface DropdonwListType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DropDownItemType extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export type Size = "xSmall" | "small" | "medium" | "large" | "xLarge" | "xxLarge";

export interface sortButtonType {
  defaultText: string;
}
