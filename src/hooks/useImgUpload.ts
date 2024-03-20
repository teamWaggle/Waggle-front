import { useState, useCallback } from "react";
import { flushSync } from "react-dom";

import { usePostMediaMutation } from "@/hooks/api/usePostMediaMutation";

export const useImgUpload = () => {
	const postMediaMutate = usePostMediaMutation();

	const [isLoading, setIsLoading] = useState(true);

	const [uploadMediaList, setUploadMediaList] = useState<string[]>([]);

	const convertToMediaUrl = useCallback(
		async (imageFiles: FileList) => {
			const imgFiles: File[] = [];
			const imgFormData = new FormData();

			Array.from(imageFiles).forEach((file) => {
				imgFiles.push(file);
			});

			imgFiles.forEach((file) => {
				imgFormData.append("uploadImgFileList", file);
			});

			postMediaMutate.mutate(imgFormData, {
				onSuccess: ({ result }) => {
					flushSync(() => {
						result.mediaList.forEach((media) =>
							setUploadMediaList((prev) => [...prev, media.imgUrl]),
						);

						setIsLoading(false);
					});
				},
			});
		},
		[postMediaMutate],
	);

	const handleImgUpload = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;

			if (!files) return;

			await convertToMediaUrl(files);
		},
		[postMediaMutate, convertToMediaUrl],
	);

	const dropImgUpload = useCallback(
		async (e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();

			if (!e.dataTransfer) {
				return;
			}

			const dropImgFiles = e.dataTransfer.files;

			if (!dropImgFiles) return;

			await convertToMediaUrl(dropImgFiles);
		},
		[postMediaMutate, convertToMediaUrl],
	);

	return {
		isLoading,
		handleImgUpload,
		dropImgUpload,
		uploadMediaList,
	};
};
