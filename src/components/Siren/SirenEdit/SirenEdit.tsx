import { useState } from "react";

import { Flex, Box, Divider, Heading, Text, Carousel } from "@/components/common";
import UploadInfo from "@/components/Siren/Upload/UploadInfo/UploadInfo";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagName, generateTagStyle } from "@/utils/generateTag";

import type { SirenEditType } from "@/types/siren";

import {
	layoutStyle,
	inputStyle,
	tagStyle,
	contentTextareaStyle,
	uploadButtonStyle,
} from "@/components/Siren/Upload/Upload.style";

const SirenEdit = ({
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
	const [newTitle, setNewTitle] = useState(title);
	const [newCategory, setNewCategory] = useState(generateTagName(category));
	const [newLostLocate, setNewLostLocate] = useState(lostLocate);
	const [newLostDate, setNewLostDate] = useState(lostDate);
	const [newPetAge, setNewPetAge] = useState(petAge);
	const [newPetBreed, setNewPetBreed] = useState(petBreed);
	const [newPetGender, setNewPetGender] = useState(petGender);
	const [newContact, setNewContact] = useState(contact);
	const [newContent, setNewContent] = useState(content);

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

			<Flex styles={{ gap: "64px", marginTop: "60px" }}>
				<Carousel
					width={536}
					height={466}
					borderRadius="20px"
					showArrows={mediaList.length > 1}
					showDots={mediaList.length > 1}
					length={mediaList.length}
				>
					{mediaList.map((media, index) => (
						<Carousel.Item index={index} key={media}>
							<img src={media} alt="mediaImg" />
						</Carousel.Item>
					))}
				</Carousel>

				<textarea
					placeholder="글을 입력해주세요"
					css={contentTextareaStyle}
					value={newContent}
					onChange={(e) => setNewContent(e.target.value)}
				/>
			</Flex>

			<button css={uploadButtonStyle}>
				<Text size="xLarge">글 수정하기</Text>
			</button>
		</Box>
	);
};

export default SirenEdit;
