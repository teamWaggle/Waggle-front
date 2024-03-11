import { useState } from "react";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";
import UploadInfo from "@/components/Siren/Upload/UploadInfo/UploadInfo";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle } from "@/utils/generateTag";

import { layoutStyle, inputStyle, tagStyle } from "@/components/Siren/Upload/Upload.style";

// export const SirenUploadContext = createContext<{
// 	lostLocate: string;
// 	lostDate: string;
// 	petAge: string;
// 	petBreed: string;
// 	petGender: string;
// 	contact: string;
// } | null>(null);

const Upload = () => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("임시보호");

	const [lostLocate, setLostLocate] = useState("");
	const [lostDate, setLostDate] = useState("");
	const [petAge, setPetAge] = useState("");
	const [petBreed, setPetBreed] = useState("");
	const [petGender, setPetGender] = useState("FEMALE");
	const [contact, setContact] = useState("");

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				SIREN - 글 작성하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<Divider length="100%" />

			<Box styles={{ marginTop: "60px" }}>
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.input_text, 500)}>
					게시판 선택
				</Text>

				<Flex styles={{ gap: "16px", marginTop: "14px" }}>
					{SIREN_TAG_CATEGORY.map((data) => (
						<Flex
							css={tagStyle(
								category === data.tagName ? generateTagStyle(data.category) : Theme.color.border,
							)}
							key={data.tagName}
							onClick={() => setCategory(data.tagName)}
						>
							<Text>{data.tagName}</Text>
						</Flex>
					))}
				</Flex>
			</Box>

			<UploadInfo
				lostLocate={lostLocate}
				lostDate={lostDate}
				petAge={petAge}
				petBreed={petBreed}
				petGender={petGender}
				contact={contact}
				setLostLocate={setLostLocate}
				setLostDate={setLostDate}
				setPetAge={setPetAge}
				setPetBreed={setPetBreed}
				setPetGender={setPetGender}
				setContact={setContact}
			/>
		</Box>
	);
};

export default Upload;
