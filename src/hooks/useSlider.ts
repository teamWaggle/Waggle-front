import { useState } from "react";

const useSlider = (length: number, slideAmount: number) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrevOnClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - slideAmount : length - slideAmount,
		);
	};

	const handleNextOnClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < length - slideAmount ? prevIndex + slideAmount : 0,
		);
	};
	return { currentIndex, handlePrevOnClick, handleNextOnClick };
};

export default useSlider;
