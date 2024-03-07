import { useState, useCallback } from "react";

export const useImgUpload = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [imgUrls, setImageUrls] = useState<string[]>([]);
	const [fileList, setFileList] = useState<File[]>([]);

	const convertImgFile = useCallback(async (originalImages: FileList): Promise<File[]> => {
		const imageFiles: File[] = [];

		try {
			await Promise.all(
				[...originalImages].map(async (file) => {
					const fileName = file.name;
					const fileType = file.type;
					const convertedFile = new File([file], fileName, { type: fileType });

					imageFiles.push(convertedFile);
				}),
			);
		} catch (e) {
			imageFiles.push(...originalImages);
		}

		return imageFiles;
	}, []);

	const convertToImageFormData = useCallback(async (imageFiles: FileList) => {
		const imgFileList = await convertImgFile(imageFiles);
		const imgFormData = new FormData();

		setFileList(imgFileList);

		imgFileList.forEach((file) => {
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

	return {
		isLoading,
		fileList,
		imgUrls,
		handleImgUpload,
	};
};
