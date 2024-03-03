import { useCallback, useState } from "react";

import { getProcessedMinSize } from "@/components/Story/StoryUpload/UploadCut";

import type { FileProp, SizeType } from "@/types/upload";

import { layoutStyle } from "@/components/Story/StoryUpload/CutImgUnit.style";

const getRatioCalculatedBoxWidth = (sizeType: SizeType, currentWidth: number) => {
	switch (sizeType) {
		case "thin":
			return currentWidth * 0.8;
		default:
			return currentWidth;
	}
};

const getRatioCalculatedBoxHeight = (sizeType: SizeType, currentWidth: number) => {
	switch (sizeType) {
		case "original":
			return currentWidth;
		case "fat":
			return (currentWidth * 9) / 16;
		default:
			return currentWidth;
	}
};

const CutImgUnit = ({
	currentFile,
	sizeMode,
	processedCurrentWidth,
	imgRef,
	onGrabStart,
	onFixTransform,
}: {
	currentFile: FileProp;
	sizeMode: SizeType;
	imgRef: React.RefObject<HTMLDivElement>;
	processedCurrentWidth: number;
	onGrabStart: () => void;
	onFixTransform: (scale: number) => void;
}) => {
	const [isGrabbing, setIsGrabbing] = useState(false);
	const [, setGrabPosition] = useState({ x: 0, y: 0 });

	const handleMouseDown = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (isGrabbing) return;

			const { screenX, screenY } = e;
			onGrabStart();

			setIsGrabbing(true);
			setGrabPosition({ x: screenX, y: screenY });
		},

		[isGrabbing],
	);

	const handleMouseUp = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (!isGrabbing) return;
			setIsGrabbing(false);
			onFixTransform(currentFile.scale);
			// setGrabPosition({ x: 0, y: 0 });
		},
		[isGrabbing, currentFile.scale],
	);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (!isGrabbing) return;

			const { screenX, screenY } = e;

			// console.log(screenX);
			// console.log(screenY);

			const { minWidth, minHeight } = getProcessedMinSize(
				processedCurrentWidth,
				currentFile.size,
				sizeMode,
			);

			// console.log(minWidth);
			// console.log(minHeight);
			console.log(currentFile.grabbedPosition.x);
			console.log(minHeight);

			const scaledMinWidth = minWidth * (currentFile.scale / 100 + 1);
			const scaledMinHeight = minHeight * (currentFile.scale / 100 + 1);
			const gapX = screenX - currentFile.grabbedPosition.x;
			const gapY = screenY - currentFile.grabbedPosition.y;

			currentFile.translateX = (gapX + currentFile.translateX * scaledMinWidth) / scaledMinWidth;
			currentFile.translateY = (gapY + currentFile.translateY * scaledMinHeight) / scaledMinHeight;
		},
		[
			isGrabbing,
			currentFile.grabbedPosition.x,
			currentFile.grabbedPosition.y,
			currentFile.scale,
			currentFile.size,
			sizeMode,
			processedCurrentWidth,
		],
	);

	// const handleMouseLeave = useCallback(
	// 	(e: React.MouseEvent<HTMLDivElement>) => {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		if (!isGrabbing) return;
	// 		onFixTransform(currentFile.scale);
	// 	},
	// 	[onFixTransform, isGrabbing, currentFile.scale],
	// );

	// console.log(currentFile.size);

	return (
		<div
			css={layoutStyle(
				currentFile.url,
				getRatioCalculatedBoxWidth(sizeMode, processedCurrentWidth),
				getRatioCalculatedBoxHeight(sizeMode, processedCurrentWidth),
			)}
		>
			<div
				ref={imgRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				// onMouseLeave={handleMouseLeave}
				style={{
					// transform:
					// 	currentFile.translateX === 0 && currentFile.translateY === 0 && currentFile.scale === 0
					// 		? "none"
					// 		: `translate3d(${currentFile.translateX * 100}%,${
					// 				currentFile.translateY * 100
					// 		  }%,0) scale(${currentFile.scale / 100 + 1})`,
					...getProcessedMinSize(processedCurrentWidth, currentFile.size, sizeMode),
				}}
			></div>
		</div>
	);
};

export default CutImgUnit;
