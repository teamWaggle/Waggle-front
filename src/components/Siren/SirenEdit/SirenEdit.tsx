import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";
import PostEdit from "@/components/common/Post/PostEdit";
import UploadInfo from "@/components/Siren/SirenUpload/SirenUploadInput/SirenUploadInput";

import { PATH } from "@/constants/path";
import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { usePutSirenMutation } from "@/hooks/api/siren/usePutSirenMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagName, generateTagStyle, generateTagCategory } from "@/utils/generateTag";

import type { SirenEditType } from "@/types/siren";

import {
	layoutStyle,
	inputStyle,
	tagStyle,
	uploadButtonStyle,
} from "@/components/Siren/SirenEdit/SirenEdit.style";

const SirenEdit = ({
	boardId,
	title,
	category,
	lostLocate,
	lostDate,
	petAge,
	petBreed,
	petGender,
	contact,
	content,
	mediaList,
}: SirenEditType) => {
	const { mutate: putSirenMutate } = usePutSirenMutation();

	const [newTitle, setNewTitle] = useState(title);
	const [newCategory, setNewCategory] = useState(generateTagName(category));
	const [newLostLocate, setNewLostLocate] = useState(lostLocate);
	const [newLostDate, setNewLostDate] = useState(lostDate);
	const [newPetAge, setNewPetAge] = useState(petAge);
	const [newPetBreed, setNewPetBreed] = useState(petBreed);
	const [newPetGender, setNewPetGender] = useState(petGender);
	const [newContact, setNewContact] = useState(contact);
	const [newContent, setNewContent] = useState(content);

	const [updateMediaList, setUpdateMediaList] = useState<string[]>(mediaList);

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const updateSirenRequest = {
			title: newTitle,
			petBreed: newPetBreed,
			petAge: newPetAge,
			petGender: newPetGender,
			contact: newContact,
			lostLocate: newLostLocate,
			lostDate: newLostDate,
			content: newContent,
			category: generateTagCategory(newCategory),
			mediaList: updateMediaList,
		};

		formData.append("updateSirenRequest", JSON.stringify(updateSirenRequest));

		putSirenMutate(
			{
				sirenId: boardId,
				formData,
			},
			{
				onSuccess: () => {
					navigate(PATH.SIREN_DETAIL(String(boardId)));
				},
			},
		);
	};

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				SIREN - 글 수정하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={newTitle}
				onChange={(e) => setNewTitle(e.target.value)}
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
								newCategory === data.tagName ? generateTagStyle(data.category) : Theme.color.border,
							)}
							key={data.tagName}
							onClick={() => setNewCategory(data.tagName)}
						>
							<Text>{data.tagName}</Text>
						</Flex>
					))}
				</Flex>
			</Box>

			<UploadInfo
				category={newCategory}
				lostLocate={newLostLocate}
				lostDate={newLostDate}
				petAge={newPetAge}
				petBreed={newPetBreed}
				petGender={newPetGender}
				contact={newContact}
				setLostLocate={setNewLostLocate}
				setLostDate={setNewLostDate}
				setPetAge={setNewPetAge}
				setPetBreed={setNewPetBreed}
				setPetGender={setNewPetGender}
				setContact={setNewContact}
			/>

			<PostEdit
				updateMediaList={updateMediaList}
				setUpdateMediaList={setUpdateMediaList}
				newContent={newContent}
				setNewContent={setNewContent}
			/>

			<button css={uploadButtonStyle} onClick={handleSubmit}>
				<Text size="xLarge">글 수정하기</Text>
			</button>
		</Box>
	);
};

export default SirenEdit;
