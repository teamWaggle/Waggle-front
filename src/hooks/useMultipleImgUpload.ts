import { useState, useCallback } from "react";
import { flushSync } from "react-dom";
import { toast } from "react-toastify";

import { FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import { usePostMediaMutation } from "@/hooks/api/media/usePostMediaMutation";

export const useMultipleImgUpload = () => {
	const { mutate: postMediaMutate } = usePostMediaMutation();

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

			postMediaMutate(imgFormData, {
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

			for (let i = 0; i < files.length; i++) {
				if (files[i].size > FILE_SIZE_MAX_LIMIT) {
					toast.error("업로드 가능한 최대 용량은 1MB입니다. ");
					return;
				}
			}

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
