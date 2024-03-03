import type { SizeType } from "@/types/upload";

export const getMinSize = (
	processedCurrentWidth: number,
	imageSize: number,
	sizeMode: SizeType,
): {
	minWidth: number;
	minHeight: number;
} => {
	if (sizeMode !== "square") {
		switch (sizeMode) {
			case "thin":
				if (imageSize > 1) {
					return {
						minWidth: processedCurrentWidth * imageSize,
						minHeight: processedCurrentWidth,
					};
				} else {
					return {
						minWidth: processedCurrentWidth * 0.8,
						minHeight: (processedCurrentWidth * 0.8) / imageSize,
					};
				}
			case "original":
				return {
					minWidth: processedCurrentWidth,
					minHeight: processedCurrentWidth / imageSize,
				};
			case "fat":
				return {
					minWidth: processedCurrentWidth,
					minHeight: processedCurrentWidth / imageSize,
				};
		}
	} else {
		if (imageSize > 1) {
			return {
				minWidth: processedCurrentWidth * imageSize,
				minHeight: processedCurrentWidth,
			};
		} else {
			return {
				minWidth: processedCurrentWidth,
				minHeight: processedCurrentWidth / imageSize,
			};
		}
	}
};

export const getSizeBoxWidth = (sizeType: SizeType, currentWidth: number) => {
	switch (sizeType) {
		case "thin":
			return currentWidth * 0.8;
		default:
			return currentWidth;
	}
};

export const getSizeBoxHeight = (sizeType: SizeType, currentWidth: number) => {
	switch (sizeType) {
		case "original":
			return currentWidth;
		case "fat":
			return (currentWidth * 9) / 16;
		default:
			return currentWidth;
	}
};
