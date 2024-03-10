import { SIREN_TAG_CATEGORY } from "@/constants/siren";

export const generateTagStyle = (category: string): string => {
	let color = "";

	SIREN_TAG_CATEGORY.map((data) => {
		if (category === data.category) {
			color = data.color;
		}
	});

	return color;
};

export const generateTagName = (category: string): string => {
	let tagName = "";

	SIREN_TAG_CATEGORY.map((data) => {
		if (category === data.category) {
			tagName = data.tagName;
		}
	});

	return tagName;
};
