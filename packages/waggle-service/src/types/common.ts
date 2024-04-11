import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface MemberIdType {
  memberId: number;
}

export interface sortButtonType {
  defaultText: string;
}

export interface CommonResponseBaseType {
  isSuccess: boolean;
  code: number;
  message: string;
}

export interface CommonResponseType {
  isSuccess: boolean;
  code: number;
  message: string;
  result: number;
}

export interface CommonResponseResultBooleanType {
  isSuccess: boolean;
  code: number;
  message: string;
  result: boolean;
}

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

export interface DefaultApiResponseType<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  result: T;
}
