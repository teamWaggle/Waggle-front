import { useState } from "react";

import { Flex, Box, Divider, Heading, Text, Carousel } from "@/components/common";
import UploadInfo from "@/components/Siren/Upload/UploadInfo/UploadInfo";
import UploadMedia from "@/components/Siren/Upload/UploadMedia/UploadMedia";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { useImgUpload } from "@/hooks/useImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle } from "@/utils/generateTag";

import {
	layoutStyle,
	inputStyle,
	tagStyle,
	contentTextareaStyle,
	uploadButtonStyle,
} from "@/components/Siren/Upload/Upload.style";

const Upload = () => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("임시보호");
	const [lostLocate, setLostLocate] = useState("");
	const [lostDate, setLostDate] = useState("");
	const [petAge, setPetAge] = useState("");
	const [petBreed, setPetBreed] = useState("");
	const [petGender, setPetGender] = useState("FEMALE");
	const [contact, setContact] = useState("");
	const [content, setContent] = useState("");

	const { isLoading, imgUrls, handleImgUpload } = useImgUpload();

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

			<Flex styles={{ gap: "64px", marginTop: "60px" }}>
				{!isLoading ? (
					<Carousel
						width={536}
						height={466}
						borderRadius="20px"
						showArrows={imgUrls.length > 1}
						showDots={imgUrls.length > 1}
						length={imgUrls.length}
					>
						{imgUrls.map((imgUrl, index) => (
							<Carousel.Item index={index} key={imgUrl}>
								<img src={imgUrl} alt="mediaImg" />
							</Carousel.Item>
						))}
					</Carousel>
				) : (
					<UploadMedia handleImgUpload={handleImgUpload} />
				)}

				<textarea
					placeholder="글을 입력해주세요"
					css={contentTextareaStyle}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</Flex>

			<button css={uploadButtonStyle}>
				<Text size="xLarge">글 작성하기</Text>
			</button>
		</Box>
	);
};

export default Upload;
