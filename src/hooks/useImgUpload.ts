import { useState, useCallback } from "react";

// import { usePostStoryMutation } from "@/hooks/api/usePostStoryMutation";

const convertToImgUrls = (imageNames: string[]) => {
	return [...imageNames]?.map((imageName) => `${import.meta.env.VITE_IMG_URL}${imageName}`);
};

export const useImgUpload = ({ initialImgName }: { initialImgName: string[] }) => {
	// const postStoryMutation = usePostStoryMutation();
	// const isImgLoading = postStoryMutation.isLoading;
	const [isLoading, setIsLoading] = useState(true);

	const initialImgUrl = convertToImgUrls([...initialImgName]);

	const [imgUrls, setImageUrls] = useState(initialImgUrl);
	const [fileList, setFileList] = useState<File[]>([]);

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

	const convertToImageFormData = useCallback(async (imgFiles: FileList) => {
		const compressImages = await compressImgs(imgFiles);
		const imgFormData = new FormData();

		setFileList(compressImages);

		compressImages.forEach((file) => {
			imgFormData.append("files", file);
		});

		const createStoryRequest = {
			content: "abc",
			hashtagList: ["abc"],
		};

		imgFormData.append("createStoryRequest", JSON.stringify(createStoryRequest));

		return imgFormData;
	}, []);

	// const postUpload = useCallback((images: FormData) => {
	// 	postStoryMutation.mutate(images, {
	// 		onSuccess: () => {
	// 			console.log("upload Success");
	// 		},
	// 		onError: () => {
	// 			console.log("upload fail");
	// 		},
	// 	});
	// }, []);

	const handleImgUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
		const originalImgFiles = e.target.files;

		if (!originalImgFiles) return;

		setImageUrls((prevImgUrls) => {
			const newImageUrls = [...originalImgFiles].map((file) => URL.createObjectURL(file));

			return [...prevImgUrls, ...newImageUrls];
		});

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const imageFormData = await convertToImageFormData(originalImgFiles);

		// postUpload(imageFormData);

		e.target.value = "";

		setIsLoading(false);
	}, []);

	return { isLoading, fileList, imgUrls, handleImgUpload };
};
