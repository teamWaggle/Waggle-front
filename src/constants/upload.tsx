import FatRectangleIcon from "@/assets/svg/upload/ic-fat-rectangle.svg?react";
import OrigianlIcon from "@/assets/svg/upload/ic-original.svg?react";
import SquareIcon from "@/assets/svg/upload/ic-square-cut.svg?react";
import ThinRectangleIcon from "@/assets/svg/upload/ic-thin-rectangle.svg?react";

import type { SizeType } from "@/types/upload";

export const SIZE_MENU: {
	text: string;
	icon: React.ReactNode;
	type: SizeType;
}[] = [
	{ text: "원본", icon: <OrigianlIcon />, type: "original" },
	{ text: "1:1", icon: <SquareIcon />, type: "square" },
	{ text: "4:5", icon: <ThinRectangleIcon />, type: "thin" },
	{ text: "16:9", icon: <FatRectangleIcon />, type: "fat" },
];
