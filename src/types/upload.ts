export interface FileProp {
	width: number;
	height: number;
	size: number;
	url: string;
	scale: number;
	grabbedPosition: { x: number; y: number };
	translateX: number;
	translateY: number;
}

export type SizeType = "original" | "square" | "thin" | "fat";
