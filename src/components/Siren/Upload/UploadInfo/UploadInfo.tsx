import { Flex } from "@/components/common";
import InfoForm from "@/components/Siren/Upload/UploadInfo/InfoForm";

interface UploadInfoProps {
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
		{ title: "보호 장소", value: lostLocate, changeValue: setLostLocate },
		{ title: "견종", value: petBreed, changeValue: setPetBreed },
		{ title: "성별", value: petGender, changeValue: setPetGender },
		{ title: "보호 시작 날짜", value: lostDate, changeValue: setLostDate },
		{ title: "추정 나이", value: petAge, changeValue: setPetAge },
		{ title: "연락처", value: contact, changeValue: setContact },
	];

	return (
		<Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px", marginTop: "90px" }}>
			{SIREN_PROTECT_DATA.map((data) => (
				<InfoForm
					key={data.title}
					title={data.title}
					value={data.value}
					changeValue={data.changeValue}
				/>
			))}
		</Flex>
	);
};

export default UploadInfo;
