import { Flex } from "@/components/common";
import InfoForm from "@/components/Siren/SirenUpload/SirenUploadInput/UploadInput";

import type { test } from "@/hooks/siren/useAddSirenForm";

interface UploadInfoProps {
	category: string;
	value: test;
	updateInputValue: <Key extends keyof test>(key: Key, value: test[Key]) => void;
}

interface DataType {
	valueKey: keyof test;
	title: string;
	placeholder?: string;
	value: string;
}

const SirenUploadInput = ({ category, value, updateInputValue }: UploadInfoProps) => {
	const SIREN_PROTECT_DATA: DataType[] = [
		{
			valueKey: "lostLocate",
			title: "보호 장소",
			placeholder: "강아지를 보호중인 장소",
			value: value.lostLocate,
		},
		{
			valueKey: "petBreed",
			title: "견종",
			placeholder: "강아지 견종",
			value: value.petBreed,
		},
		{
			valueKey: "petGender",
			title: "성별",
			value: value.petGender,
		},
		{
			valueKey: "lostDate",
			title: "보호 시작 날짜",
			placeholder: "강아지 보호 시작 날짜",
			value: value.lostDate,
		},
		{
			valueKey: "petAge",
			title: "추정 나이",
			placeholder: "강아지 추정 나이",
			value: value.petAge,
		},
		{
			valueKey: "contact",
			title: "연락처",
			placeholder: "연락처",
			value: value.contact,
		},
	];

	// const SIREN_FIND_PET_DATA = [
	// 	{
	// 		title: "실종 장소",
	// 		placeholder: "강아지를 잃어버린 장소",
	// 		value: lostLocate,
	// 	},
	// 	{
	// 		title: "견종",
	// 		placeholder: "강아지 견종",
	// 		value: petBreed,
	// 	},
	// 	{
	// 		title: "성별",
	// 		value: petGender,
	// 	},
	// 	{
	// 		title: "실종 날짜",
	// 		placeholder: "강아지를 잃어버린 날짜",
	// 		value: lostDate,
	// 	},
	// 	{
	// 		title: "추정 나이",
	// 		placeholder: "강아지 나이",
	// 		value: petAge,
	// 	},
	// 	{
	// 		title: "연락처",
	// 		placeholder: "연락처",
	// 		value: contact,
	// 	},
	// ];

	// const SIREN_FIND_OWNER_DATA = [
	// 	{
	// 		title: "발견 장소",
	// 		placeholder: "강아지를 발견한 지역과 장소",
	// 		value: lostLocate,
	// 	},
	// 	{
	// 		title: "견종",
	// 		placeholder: "강아지 견종",
	// 		value: petBreed,
	// 	},
	// 	{
	// 		title: "성별",
	// 		value: petGender,
	// 	},
	// 	{
	// 		title: "발견 날짜",
	// 		placeholder: "강아지를 발견한 날짜",
	// 		value: lostDate,
	// 	},
	// 	{
	// 		title: "추정 나이",
	// 		placeholder: "강아지 나이",
	// 		value: petAge,
	// 	},
	// 	{
	// 		title: "연락처",
	// 		placeholder: "연락처",
	// 		value: contact,
	// 	},
	// ];

	// const SIREN_ETC_DATA = [
	// 	{
	// 		title: "위치",
	// 		placeholder: "관련 위치 정보",
	// 		value: lostLocate,
	// 	},
	// 	{
	// 		title: "견종",
	// 		placeholder: "강아지 견종",
	// 		value: petBreed,
	// 	},
	// 	{
	// 		title: "성별",
	// 		value: petGender,
	// 	},
	// 	{
	// 		title: "날짜",
	// 		placeholder: "관련 날짜 정보",
	// 		value: lostDate,
	// 	},
	// 	{
	// 		title: "추정 나이",
	// 		placeholder: "강아지 나이",
	// 		value: petAge,
	// 	},
	// 	{
	// 		title: "연락처",
	// 		placeholder: "연락처",
	// 		value: contact,
	// 	},
	// ];

	return (
		<Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px", marginTop: "90px" }}>
			{category === "임시보호" &&
				SIREN_PROTECT_DATA.map((data) => (
					<InfoForm
						key={data.title}
						valueKey={data.valueKey}
						title={data.title}
						placeholder={data.placeholder}
						value={data.value}
						updateInputValue={updateInputValue}
					/>
				))}

			{/* {category === "강아지 찾아요" &&
				SIREN_FIND_PET_DATA.map((data) => (
					<InfoForm
						key={data.title}
						title={data.title}
						placeholder={data.placeholder}
						value={data.value}
						changeValue={data.changeValue}
					/>
				))}

			{category === "주인 찾아요" &&
				SIREN_FIND_OWNER_DATA.map((data) => (
					<InfoForm
						key={data.title}
						title={data.title}
						placeholder={data.placeholder}
						value={data.value}
						changeValue={data.changeValue}
					/>
				))}

			{category === "기타" &&
				SIREN_ETC_DATA.map((data) => (
					<InfoForm
						key={data.title}
						title={data.title}
						placeholder={data.placeholder}
						value={data.value}
						changeValue={data.changeValue}
					/>
				))} */}
		</Flex>
	);
};

export default SirenUploadInput;
