import { useState, useCallback } from "react";
import { flushSync } from "react-dom";

import { usePostMediaMutation } from "@/hooks/api/usePostMediaMutation";

export const useImgUpload = () => {
	const postMediaMutate = usePostMediaMutation();

	const [isLoading, setIsLoading] = useState(true);

	const [imgUrls, setImageUrls] = useState<string[]>([]);
	const [fileList, setFileList] = useState<File[]>([]);

	const [updateMediaList, setUpdateMediaList] = useState<string[]>([]);

	const convertToImageFormData = useCallback(async (imageFiles: FileList) => {
		const imgFiles: File[] = [];
		const imgFormData = new FormData();

		Array.from(imageFiles).forEach((file) => {
			imgFiles.push(file);
		});

		setFileList(imgFiles);

		imgFiles.forEach((file) => {
			imgFormData.append("files", file);
		});

		return imgFormData;
	}, []);

	const handleImgUpdate = async (
		e: React.ChangeEvent<HTMLInputElement>,
		updateImgUrls?: string[],
		isUpdate?: boolean,
	) => {
		const files = e.target.files;

		const mediaFormData = new FormData();

		if (!files) return;

		setImageUrls(() => {
			const imgUrls = [...files].map((file) => URL.createObjectURL(file));

			if (isUpdate && updateImgUrls) {
				return [...updateImgUrls, ...imgUrls];
			} else {
				return [...imgUrls];
			}
		});

		const updateFileList = await convertToImageFormData(files);

		updateFileList.forEach((file) => {
			mediaFormData.append("uploadImgFileList", file);
		});

		postMediaMutate.mutate(mediaFormData, {
			onSuccess: ({ result }) => {
				console.log(result);
				flushSync(() => {
					result.mediaList.forEach((media) =>
						setUpdateMediaList((prev) => [...prev, media.imgUrl]),
					);

					setIsLoading(false);
				});
			},
		});
	};

	const handleImgUpload = async (
		e: React.ChangeEvent<HTMLInputElement>,
		updateImgUrls: string[],
		isUpdate?: boolean,
	) => {
		const files = e.target.files;

		if (!files) return;

		setImageUrls(() => {
			const imgUrls = [...files].map((file) => URL.createObjectURL(file));

			if (isUpdate) {
				return [...updateImgUrls, ...imgUrls];
			} else {
				return [...imgUrls];
			}
		});

		await convertToImageFormData(files);

		setIsLoading(false);
	};

	const dropImgUpload = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
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

		await convertToImageFormData(dropImgFiles);

		setIsLoading(false);
	}, []);

	return {
		isLoading,
		fileList,
		imgUrls,
		handleImgUpload,
		dropImgUpload,
		updateMediaList,
		handleImgUpdate,
	};
};
