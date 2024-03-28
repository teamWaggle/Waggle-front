import { useState } from "react";

import { Flex, Box, Heading, Text, Carousel } from "@/components/common";
import UploadMedia from "@/components/Siren/Upload/UploadMedia/UploadMedia";

import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	inputStyle,
	contentTextareaStyle,
	uploadButtonStyle,
} from "@/components/Question/QuestionUpload/QuestionUpload.style";

const QuestionUpload = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const { isLoading, handleImgUpload, dropImgUpload, uploadMediaList } = useMultipleImgUpload();

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				Q&A - 질문 작성하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<Flex styles={{ gap: "64px", marginTop: "60px" }}>
				{!isLoading ? (
					<Carousel
						width={536}
						height={466}
						borderRadius="20px"
						showArrows={uploadMediaList.length > 1}
						showDots={uploadMediaList.length > 1}
						length={uploadMediaList.length}
					>
						{uploadMediaList.map((imgUrl, index) => (
							<Carousel.Item index={index} key={imgUrl}>
								<img src={imgUrl} alt="mediaImg" />
							</Carousel.Item>
						))}
					</Carousel>
				) : (
					<UploadMedia handleImgUpload={handleImgUpload} dropImgUpload={dropImgUpload} />
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

export default QuestionUpload;
