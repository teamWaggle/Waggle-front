import { getMinSize, getSizeBoxWidth, getSizeBoxHeight } from "@/utils/upload";

import type { FileProp, SizeType } from "@/types/upload";

import { layoutStyle } from "@/components/Story/StoryUpload/CutImgUnit.style";

const CutImgUnit = ({
	currentFile,
	sizeMode,
	currentWidth,
	imgRef,
}: {
	currentFile: FileProp;
	sizeMode: SizeType;
	currentWidth: number;
	imgRef: React.RefObject<HTMLDivElement>;
}) => {
	return (
		<div
			css={layoutStyle(
				currentFile.url,
				getSizeBoxWidth(sizeMode, currentWidth),
				getSizeBoxHeight(sizeMode, currentWidth),
			)}
		>
			<div
				ref={imgRef}
				style={{
					...getMinSize(currentWidth, currentFile.size, sizeMode),
				}}
			></div>
		</div>
	);
};

export default CutImgUnit;
