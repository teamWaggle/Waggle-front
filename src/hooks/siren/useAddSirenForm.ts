import { useState, useCallback } from "react";

export interface test {
	title: string;
	content: string;
	lostLocate: string;
	petBreed: string;
	petGender: string;
	lostDate: string;
	petAge: string;
	contact: string;
}

export const useAddSirenForm = () => {
	const [createSirenRequest2, setCreateSirenRequest] = useState({
		title: "",
		content: "",
		lostLocate: "",
		petBreed: "",
		petGender: "FEMALE",
		lostDate: "",
		petAge: "",
		contact: "",
	});
	const updateInputValue = useCallback(<Key extends keyof test>(key: Key, value: test[Key]) => {
		setCreateSirenRequest((prevCreateSirenRequest) => {
			const data = {
				...prevCreateSirenRequest,
				[key]: value,
			};

			return data;
		});
	}, []);

	return { createSirenRequest2, updateInputValue };
};
