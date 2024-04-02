import { useEffect, useState } from "react";

const useImagePreview = (image: File) => {
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	useEffect(() => {
		if (image) {
			const newUrl = URL.createObjectURL(image);

			if (newUrl !== imagePreview) {
				URL.revokeObjectURL(imagePreview || "");
				setImagePreview(newUrl);
			}
		}
	}, [image]);

	return { imagePreview, setImagePreview };
};

export default useImagePreview;
