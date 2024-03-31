import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { usePostSirenMutation } from "@/hooks/api/siren/usePostSirenMutation";

import type { SirenFormData } from "@/types/siren";

export const useAddSirenForm = () => {
	const { mutate: postSirenMutate } = usePostSirenMutation();

	const navigate = useNavigate();

	const [createSirenRequest, setCreateSirenRequest] = useState({
		title: "",
		content: "",
		lostLocate: "",
		petBreed: "",
		petGender: "FEMALE",
		lostDate: "",
		petAge: "",
		contact: "",
		category: "PROTECT",
		mediaList: [],
	});

	const updateInputValue = useCallback(
		<Key extends keyof SirenFormData>(key: Key, value: SirenFormData[Key]) => {
			setCreateSirenRequest((prevCreateSirenRequest) => {
				const data = {
					...prevCreateSirenRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("createSirenRequest", JSON.stringify(createSirenRequest));

		postSirenMutate(formData, {
			onSuccess: () => {
				navigate("/siren");
			},
		});
	};

	return { createSirenRequest, updateInputValue, handleSubmit };
};
