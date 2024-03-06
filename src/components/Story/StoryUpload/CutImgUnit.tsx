import { getMinSize, getSizeBoxWidth, getSizeBoxHeight } from "@/utils/upload";

import type { FileProp, SizeType } from "@/types/upload";

import { layoutStyle } from "@/components/Story/StoryUpload/CutImgUnit.style";

const CutImgUnit = ({
	imgUrls,
	currentFile,
	sizeMode,
	currentWidth,
	imgRef,
}: {
	imgUrls: string;
	currentFile: FileProp;
	sizeMode: SizeType;
	currentWidth: number;
	imgRef: React.RefObject<HTMLDivElement>;
}) => {
	console.log(imgUrls);

	return (
		<div
			css={layoutStyle(
				imgUrls,
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
