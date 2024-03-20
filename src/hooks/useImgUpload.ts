import { useState, useCallback } from "react";
import { flushSync } from "react-dom";

import { usePostMediaMutation } from "@/hooks/api/usePostMediaMutation";

export const useImgUpload = () => {
	const postMediaMutate = usePostMediaMutation();

	const [isLoading, setIsLoading] = useState(true);

	const [imgUrls, setImageUrls] = useState<string[]>([]);
	const [fileList] = useState<File[]>([]);

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

			// setFileList(imgFiles);
		},
		[imgUrls],
	);

	const handleImgUpload = useCallback(
		async (
			e: React.ChangeEvent<HTMLInputElement>,
			updateImgUrls?: string[],
			isUpdate?: boolean,
		) => {
			const files = e.target.files;

			if (!files) return;

			setImageUrls(() => {
				const imgUrls = [...files].map((file) => URL.createObjectURL(file));

				if (isUpdate && updateImgUrls) {
					return [...updateImgUrls, ...imgUrls];
				} else {
					return [...imgUrls];
				}
			});

			await convertToMediaUrl(files);
		},
		[postMediaMutate, imgUrls, convertToMediaUrl],
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

			setImageUrls(() => {
				const imgUrls = [...dropImgFiles].map((file) => URL.createObjectURL(file));

				return [...imgUrls];
			});

			await convertToMediaUrl(dropImgFiles);
		},
		[postMediaMutate, imgUrls, convertToMediaUrl],
	);

	return {
		isLoading,
		fileList,
		imgUrls,
		handleImgUpload,
		dropImgUpload,
		uploadMediaList,
	};
};
