import { useState } from "react";

const useSlider = (dataLength: number, slideAmount: number) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrevOnClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - slideAmount : dataLength - slideAmount,
		);
	};

	const handleNextOnClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < dataLength - slideAmount ? prevIndex + slideAmount : 0,
		);
	};
	return { currentIndex, handlePrevOnClick, handleNextOnClick };
};

export default useSlider;
