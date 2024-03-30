import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Heading, Text } from "@/components/common";
import PostUpload from "@/components/common/Post/PostUpload/PostUpload";
import SirenUploadInput from "@/components/Siren/SirenUpload/SirenUploadInput/SirenUploadInput";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { usePostSirenMutation } from "@/hooks/api/siren/usePostSirenMutation";
import { useAddSirenForm } from "@/hooks/siren/useAddSirenForm";
import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagCategory } from "@/utils/generateTag";

import {
	layoutStyle,
	inputStyle,
	tagStyle,
	uploadButtonStyle,
} from "@/components/Siren/SirenUpload/SirenUpload.style";

const SirenUpload = () => {
	const { mutate: postSirenMutate } = usePostSirenMutation();
	const { createSirenRequest2, updateInputValue } = useAddSirenForm();

	console.log(createSirenRequest2);

	const [title] = useState("");
	const [category, setCategory] = useState("임시보호");
	const [lostLocate] = useState("");
	const [lostDate] = useState("");
	const [petAge] = useState("");
	const [petBreed] = useState("");
	const [petGender] = useState("FEMALE");
	const [contact] = useState("");
	const [content, setContent] = useState("");

	const navigate = useNavigate();

	const { isLoading, handleImgUpload, dropImgUpload, uploadMediaList } = useMultipleImgUpload();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const createSirenRequest = {
			title,
			petBreed,
			petAge,
			petGender,
			contact,
			lostLocate,
			lostDate,
			content,
			category: generateTagCategory(category),
			mediaList: uploadMediaList,
		};

		formData.append("createSirenRequest", JSON.stringify(createSirenRequest));

		postSirenMutate(formData, {
			onSuccess: () => {
				navigate("/siren");
			},
		});
	};

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				SIREN - 글 작성하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={createSirenRequest2.title}
				onChange={(e) => updateInputValue("title", e.target.value)}
			/>

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

			<SirenUploadInput value={createSirenRequest2} updateInputValue={updateInputValue} />

			<PostUpload
				content={content}
				setContent={setContent}
				isLoading={isLoading}
				uploadMediaList={uploadMediaList}
				handleImgUpload={handleImgUpload}
				dropImgUpload={dropImgUpload}
			/>

			<button css={uploadButtonStyle} onClick={handleSubmit}>
				<Text size="xLarge">글 작성하기</Text>
			</button>
		</Box>
	);
};

export default SirenUpload;
