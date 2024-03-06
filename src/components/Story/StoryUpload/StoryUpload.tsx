import { useState, useEffect } from "react";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";
import UploadCut from "@/components/Story/StoryUpload/UploadCut";

import { useImgUpload } from "@/hooks/useImgUpload";
import useModal from "@/hooks/useModal";

import type { FileProp } from "@/types/upload";

import { layoutStyle } from "@/components/Story/StoryUpload/StoryUpload.style";

const StoryUpload = () => {
	const [file] = useState<FileProp[]>([
		{
			width: 0,
			height: 0,
			url: "",
			size: 0,
			translateX: 0,
			translateY: 0,
			scale: 0,
			grabbedPosition: { x: 0, y: 0 },
		},
	]);

	const [isDragOver, setIsDragOver] = useState(false);

	const modal = useModal();

	const { isLoading, imgUrls, fileList, handleImgUpload, dropImgUpload } = useImgUpload({
		initialImgName: [],
	});

	const handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		setIsDragOver(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.dataTransfer!.files) {
			setIsDragOver(true);
		}
	};

	// const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (!e.target.files) return;

	// 	const files = e.target.files;
	// 	const imgUrlList: FileProp[] = [];

	// 	if (!files) {
	// 		return;
	// 	}

	// 	for (let i = 0; i < files.length; i++) {
	// 		const img = new Image();
	// 		img.src = URL.createObjectURL(files[i]);
	// 		img.onload = () => {
	// 			imgUrlList.push({
	// 				url: img.src,
	// 				width: img.width,
	// 				height: img.height,
	// 				size: img.width / img.height,
	// 				translateX: 0,
	// 				translateY: 0,
	// 				scale: 0,
	// 				grabbedPosition: { x: 0, y: 0 },
	// 			});

	// 			if (img.complete) {
	// 				setFile(imgUrlList);
	// 				setFileUpload(true);
	// 			}
	// 		};
	// 	}

	useEffect(() => {
		if (!isLoading) {
			modal.closeModal();

			modal.openModal({
				key: `UploadCutModal`,
				component: () => <UploadCut medias={file} imgUrls={imgUrls} fileList={fileList} />,
				notCloseIcon: true,
			});
		}
	}, [isLoading]);

	return (
		<Flex
			css={layoutStyle(isDragOver)}
			onDrop={dropImgUpload}
			onDragEnter={handleDragIn}
			onDragLeave={handleDragOut}
			onDragOver={handleDragOver}
		>
			<UploadMediaIcon />
			<Text size="xLarge">사진과 동영상을 여기다 끌어다 놓으세요</Text>
			<label htmlFor="media">
				<Text size="large">컴퓨터에서 선택</Text>
			</label>
			<input
				type="file"
				multiple={true}
				id="media"
				onChange={handleImgUpload}
				accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
			/>
		</Flex>
	);
};

export default StoryUpload;
