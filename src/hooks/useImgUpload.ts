// import { useState, useCallback } from "react";

// export const useImgUpload = () => {
// 	const [isLoading, setIsLoading] = useState(true);

// 	const [imgUrls, setImageUrls] = useState<string[]>([]);
// 	const [fileList, setFileList] = useState<File[]>([]);

// 	const [updateFileList, setUpdateFileList] = useState<File[]>([]);

// 	const compressImgs = useCallback(async (originalImageFiles: FileList): Promise<File[]> => {
// 		const imageFiles: File[] = [];

// 		try {
// 			await Promise.all(
// 				[...originalImageFiles].map(async (file) => {
// 					const fileName = file.name;
// 					const fileType = file.type;
// 					const convertedFile = new File([file], fileName, { type: fileType });

// 					imageFiles.push(convertedFile);
// 				}),
// 			);
// 		} catch (e) {
// 			imageFiles.push(...originalImageFiles);
// 		}

// 		return imageFiles;
// 	}, []);

// 	const convertToImageFormData = useCallback(async (imgFiles: FileList, isUpdate?: boolean) => {
// 		const compressImages = await compressImgs(imgFiles);
// 		const imgFormData = new FormData();

// 		isUpdate ? setUpdateFileList(compressImages) : setFileList(compressImages);

// 		// setFileList(compressImages);

// 		compressImages.forEach((file) => {
// 			imgFormData.append("files", file);
// 		});

// 		return imgFormData;
// 	}, []);

// 	const handleUpdateImgUpload = useCallback(
// 		async (e: React.ChangeEvent<HTMLInputElement>, updateImgUrls: string[]) => {
// 			const addImgFiles = e.target.files;

// 			console.log(updateImgUrls);

// 			if (!addImgFiles) return;

// 			setImageUrls((prevImgUrls) => {
// 				const newImageUrls = [...addImgFiles].map((file) => URL.createObjectURL(file));

// 				return [...prevImgUrls, ...updateImgUrls, ...newImageUrls];
// 			});

// 			await convertToImageFormData(addImgFiles, true);

// 			setIsLoading(false);
// 		},
// 		[],
// 	);

// 	const handleImgUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const originalImgFiles = e.target.files;

// 		if (!originalImgFiles) return;

// 		setImageUrls(() => {
// 			const newImageUrls = [...originalImgFiles].map((file) => URL.createObjectURL(file));

// 			return [...newImageUrls];
// 		});

// 		await convertToImageFormData(originalImgFiles);

// 		setIsLoading(false);
// 	}, []);

// 	const dropImgUpload = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
// 		e.preventDefault();
// 		e.stopPropagation();

// 		if (!e.dataTransfer) {
// 			return;
// 		}

// 		const dropImgFiles = e.dataTransfer.files;

// 		if (!dropImgFiles) return;

// 		setImageUrls(() => {
// 			const newImageUrls = [...dropImgFiles].map((file) => URL.createObjectURL(file));

// 			return [...newImageUrls];
// 		});

// 		await convertToImageFormData(dropImgFiles);

// 		setIsLoading(false);
// 	}, []);

// 	return {
// 		isLoading,
// 		fileList,
// 		imgUrls,
// 		handleImgUpload,
// 		dropImgUpload,
// 		handleUpdateImgUpload,
// 		updateFileList,
// 	};
// };

import { useState, useCallback } from "react";

export const useImgUpload = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [imgUrls, setImageUrls] = useState<string[]>([]);
	const [fileList, setFileList] = useState<File[]>([]);

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

	const handleImgUpload = async (
		e: React.ChangeEvent<HTMLInputElement>,
		updateImgUrls: string[],
		isUpdate?: boolean,
	) => {
		const files = e.target.files;

		console.log(files);
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
	};
};
