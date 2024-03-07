import { useState, useCallback } from "react";

const convertToImgUrls = (imageNames: string[]) => {
	return [...imageNames]?.map((imageName) => `${import.meta.env.VITE_IMG_URL}${imageName}`);
};

export const useImgUpload = ({ initialImgName }: { initialImgName: string[] }) => {
	const [isLoading, setIsLoading] = useState(true);

	const initialImgUrl = convertToImgUrls([...initialImgName]);

	const [imgUrls, setImageUrls] = useState(initialImgUrl);
	const [fileList, setFileList] = useState<File[]>([]);

	const [updateFileList, setUpdateFileList] = useState<File[]>([]);

	const compressImgs = useCallback(async (originalImageFiles: FileList): Promise<File[]> => {
		const imageFiles: File[] = [];

		try {
			await Promise.all(
				[...originalImageFiles].map(async (file) => {
					const fileName = file.name;
					const fileType = file.type;
					const convertedFile = new File([file], fileName, { type: fileType });

					imageFiles.push(convertedFile);
				}),
			);
		} catch (e) {
			imageFiles.push(...originalImageFiles);
		}

		return imageFiles;
	}, []);

	const convertToImageFormData = useCallback(async (imgFiles: FileList, isUpdate?: boolean) => {
		const compressImages = await compressImgs(imgFiles);
		const imgFormData = new FormData();

		isUpdate ? setUpdateFileList(compressImages) : setFileList(compressImages);

		// setFileList(compressImages);

		compressImages.forEach((file) => {
			imgFormData.append("files", file);
		});

		return imgFormData;
	}, []);

	const handleUpdateImgUpload = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>, updateImgUrls: string[]) => {
			const addImgFiles = e.target.files;

			console.log(updateImgUrls);

			if (!addImgFiles) return;

			setImageUrls((prevImgUrls) => {
				const newImageUrls = [...addImgFiles].map((file) => URL.createObjectURL(file));

				return [...prevImgUrls, ...updateImgUrls, ...newImageUrls];
			});

			await convertToImageFormData(addImgFiles, true);

			setIsLoading(false);
		},
		[],
	);

	const handleImgUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
		const originalImgFiles = e.target.files;

		if (!originalImgFiles) return;

		setImageUrls((prevImgUrls) => {
			const newImageUrls = [...originalImgFiles].map((file) => URL.createObjectURL(file));

			return [...prevImgUrls, ...newImageUrls];
		});

		await convertToImageFormData(originalImgFiles);

		setIsLoading(false);
	}, []);

	const dropImgUpload = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (!e.dataTransfer) {
			return;
		}

		const dropImgFiles = e.dataTransfer.files;

		if (!dropImgFiles) return;

		setImageUrls((prevImgUrls) => {
			const newImageUrls = [...dropImgFiles].map((file) => URL.createObjectURL(file));

			return [...prevImgUrls, ...newImageUrls];
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
		handleUpdateImgUpload,
		updateFileList,
	};
};
