export const getDate = () => {
	const getCurrentYear = (date: Date) => date.getFullYear();
	const getCurrentMonth = (date: Date) => date.getMonth() + 1;
	return { getCurrentYear, getCurrentMonth };
};
