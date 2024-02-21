import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface sortButtonType {
	defaultText: string;
}

export interface CommonResponseType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: number;
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
