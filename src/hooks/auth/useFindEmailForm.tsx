import { useState, useCallback } from "react";

import ResultEmailModal from "@/components/Login/ResultEmailModal/ResultEmailModal";

import { useFindEmailMutation } from "@/hooks/api/auth/useFindEmailMutation";
import useModal from "@/hooks/useModal";

import { dateFormatToUTC } from "@/utils/dateFormatToUTC";

import type { FindEmailResponseType } from "@/types/auth";

interface FindEmailForm {
	value: string;
}

export interface BirthdayForm {
	year: string | boolean;
	month: string | boolean;
	day: string | boolean;
}

export const useFindEmailForm = () => {
	const { mutate: findEmailMutation } = useFindEmailMutation();

	const modal = useModal();

	const [birthdayRequest, setBirthdayRequest] = useState({
		year: "생년",
		month: "월 선택",
		day: "일 선택",
	});

	const [selectOpen, setSelectOpen] = useState({
		year: false,
		month: false,
		day: false,
	});

	const [name, setName] = useState({ value: "" });
	const [birthday, setBirthday] = useState("");

	const updateNameValue = useCallback(
		<Key extends keyof FindEmailForm>(key: Key, value: FindEmailForm[Key]) => {
			setName((prevName) => {
				const data = {
					...prevName,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSelectOpen = useCallback(
		<Key extends keyof BirthdayForm>(key: Key, value: BirthdayForm[Key]) => {
			setSelectOpen((prevSelectOpen) => {
				const data = {
					...prevSelectOpen,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const updateBirthdayValue = useCallback(
		<Key extends keyof BirthdayForm>(key: Key, value: BirthdayForm[Key]) => {
			setBirthdayRequest((prevBirthdayRequest) => {
				const data = {
					...prevBirthdayRequest,
					[key]: value,
				};

				setBirthday(dateFormatToUTC(data.year, data.month, data.day));

				return data;
			});

			handleSelectOpen(key, false);
		},
		[],
	);

	const handleSubmit = () => {
		findEmailMutation(
			{ name: name.value, birthday },
			{
				onSuccess: ({ result }: FindEmailResponseType) => {
					modal.closeModal();
					modal.openModal({
						key: "ResultEmailModal",
						component: () => <ResultEmailModal emailList={result.emailList} />,
					});
				},
			},
		);
	};

	return {
		name,
		updateNameValue,
		handleSubmit,
		selectOpen,
		handleSelectOpen,
		birthdayRequest,
		updateBirthdayValue,
	};
};
