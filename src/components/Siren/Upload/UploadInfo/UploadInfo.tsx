import { Flex } from "@/components/common";
import InfoForm from "@/components/Siren/Upload/UploadInfo/InfoForm";

interface UploadInfoProps {
	category: string;
	lostLocate: string;
	lostDate: string;
	petAge: string;
	petBreed: string;
	petGender: string;
	contact: string;
	setLostLocate: React.Dispatch<React.SetStateAction<string>>;
	setLostDate: React.Dispatch<React.SetStateAction<string>>;
	setPetAge: React.Dispatch<React.SetStateAction<string>>;
	setPetBreed: React.Dispatch<React.SetStateAction<string>>;
	setPetGender: React.Dispatch<React.SetStateAction<string>>;
	setContact: React.Dispatch<React.SetStateAction<string>>;
}

const UploadInfo = ({
	category,
	lostLocate,
	lostDate,
	petAge,
	petBreed,
	petGender,
	contact,
	setLostLocate,
	setLostDate,
	setPetAge,
	setPetBreed,
	setPetGender,
	setContact,
}: UploadInfoProps) => {
	const SIREN_PROTECT_DATA = [
		{
			title: "보호 장소",
			placeholder: "강아지를 보호중인 장소",
			value: lostLocate,
			changeValue: setLostLocate,
		},
		{
			title: "견종",
			placeholder: "강아지 견종",
			value: petBreed,
			changeValue: setPetBreed,
		},
		{
			title: "성별",
			value: petGender,
			changeValue: setPetGender,
		},
		{
			title: "보호 시작 날짜",
			placeholder: "강아지 보호 시작 날짜",
			value: lostDate,
			changeValue: setLostDate,
		},
		{
			title: "추정 나이",
			placeholder: "강아지 추정 나이",
			value: petAge,
			changeValue: setPetAge,
		},
		{
			title: "연락처",
			placeholder: "연락처",
			value: contact,
			changeValue: setContact,
		},
	];

	const SIREN_FIND_PET_DATA = [
		{
			title: "실종 장소",
			placeholder: "강아지를 잃어버린 장소",
			value: lostLocate,
			changeValue: setLostLocate,
		},
		{
			title: "견종",
			placeholder: "강아지 견종",
			value: petBreed,
			changeValue: setPetBreed,
		},
		{
			title: "성별",
			value: petGender,
			changeValue: setPetGender,
		},
		{
			title: "실종 날짜",
			placeholder: "강아지를 잃어버린 날짜",
			value: lostDate,
			changeValue: setLostDate,
		},
		{
			title: "추정 나이",
			placeholder: "강아지 나이",
			value: petAge,
			changeValue: setPetAge,
		},
		{
			title: "연락처",
			placeholder: "연락처",
			value: contact,
			changeValue: setContact,
		},
	];

	const SIREN_FIND_OWNER_DATA = [
		{
			title: "발견 장소",
			placeholder: "강아지를 발견한 지역과 장소",
			value: lostLocate,
			changeValue: setLostLocate,
		},
		{
			title: "견종",
			placeholder: "강아지 견종",
			value: petBreed,
			changeValue: setPetBreed,
		},
		{
			title: "성별",
			value: petGender,
			changeValue: setPetGender,
		},
		{
			title: "발견 날짜",
			placeholder: "강아지를 발견한 날짜",
			value: lostDate,
			changeValue: setLostDate,
		},
		{
			title: "추정 나이",
			placeholder: "강아지 나이",
			value: petAge,
			changeValue: setPetAge,
		},
		{
			title: "연락처",
			placeholder: "연락처",
			value: contact,
			changeValue: setContact,
		},
	];

	const SIREN_ETC_DATA = [
		{
			title: "위치",
			placeholder: "관련 위치 정보",
			value: lostLocate,
			changeValue: setLostLocate,
		},
		{
			title: "견종",
			placeholder: "강아지 견종",
			value: petBreed,
			changeValue: setPetBreed,
		},
		{
			title: "성별",
			value: petGender,
			changeValue: setPetGender,
		},
		{
			title: "날짜",
			placeholder: "관련 날짜 정보",
			value: lostDate,
			changeValue: setLostDate,
		},
		{
			title: "추정 나이",
			placeholder: "강아지 나이",
			value: petAge,
			changeValue: setPetAge,
		},
		{
			title: "연락처",
			placeholder: "연락처",
			value: contact,
			changeValue: setContact,
		},
	];

	return (
		<Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px", marginTop: "90px" }}>
			{category === "임시보호" &&
				SIREN_PROTECT_DATA.map((data) => (
					<InfoForm
						key={data.title}
						title={data.title}
						placeholder={data.placeholder}
						value={data.value}
						changeValue={data.changeValue}
					/>
				))}

			{category === "강아지 찾아요" &&
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
				))}
		</Flex>
	);
};

export default UploadInfo;
