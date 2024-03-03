import { useCallback, useState } from "react";

import type { FileProp } from "@/types/upload";

import { layoutStyle } from "@/components/Story/StoryUpload/CutImgUnit.style";

const CutImgUnit = ({
	imgRef,
	currentFile,
	onFixTransform,
	onGrabStart,
}: {
	imgRef: React.RefObject<HTMLDivElement>;
	currentFile: FileProp;
	onFixTransform: (scale: number) => void;
	onGrabStart: () => void;
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
			setGrabPosition({ x: 0, y: 0 });
		},
		[isGrabbing, onFixTransform, currentFile.scale],
	);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (!isGrabbing) return;

			const { screenX, screenY } = e;
			const scaledMinWidth = 740 * (currentFile.scale / 100 + 1);
			const scaledMinHeight = 740 * (currentFile.scale / 100 + 1);
			const gapX = screenX - currentFile.grabbedPosition.x;
			const gapY = screenY - currentFile.grabbedPosition.y;

			currentFile.translateX = (gapX + currentFile.translateX * scaledMinWidth) / scaledMinWidth;
			currentFile.translateY = (gapY + currentFile.translateY * scaledMinHeight) / scaledMinHeight;
		},
		[isGrabbing, currentFile.grabbedPosition.x, currentFile.grabbedPosition.y, currentFile.scale],
	);

	const handleMouseLeave = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (!isGrabbing) return;
			onFixTransform(currentFile.scale);
		},
		[onFixTransform, isGrabbing, currentFile.scale],
	);

	return (
		<div css={layoutStyle(currentFile.url)}>
			<div
				ref={imgRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				style={{
					transform:
						currentFile.translateX === 0 && currentFile.translateY === 0 && currentFile.scale === 0
							? "none"
							: `translate3d(${currentFile.translateX * 100}%,${
									currentFile.translateY * 100
							  }%,0) scale(${currentFile.scale / 100 + 1})`,
				}}
			></div>
		</div>
	);
};

export default CutImgUnit;
