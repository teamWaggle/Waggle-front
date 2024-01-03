import { useCallback, useState } from "react";

export const useOverlay = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const close = useCallback(() => {
		setIsOpen(false);
		console.log("test");
	}, [setIsOpen]);

	return { isOpen, open, close };
};