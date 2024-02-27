import { useState } from "react";

import SampleImg from "@/assets/png/post-sample.png";
import LeftArrow from "@/assets/svg/ic-left-arrow-primary.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	headerStyle,
	imgBoxStyle,
	profileImgStyle,
	textareaStyle,
	lengthTextStyle,
} from "@/components/Story/StoryUpload/StoryContent.style";

const StoryContent = ({ media }: { media: string }) => {
	const [content, setContent] = useState("");

	return (
		<Flex css={layoutStyle}>
			<Flex css={headerStyle}>
				<LeftArrow />
				<Text size="large" css={getDefaultTextStyle(Theme.color.text, 600)}>
					글 쓰기
				</Text>
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
					업로드
				</Text>
			</Flex>

			<Flex styles={{ height: "calc(100% - 44px)" }}>
				<Box css={imgBoxStyle}>
					<img src={media} alt="media" />
				</Box>

				<Flex styles={{ direction: "column", padding: "14px 28px", gap: "12px", width: "319px" }}>
					{/* 프로필 */}
					<Flex styles={{ align: "center", gap: "10px" }}>
						<img src={SampleImg} alt="profileImg" css={profileImgStyle} />
						<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
							강아지댕댕댕
						</Text>
					</Flex>

					{/* 본문 입력 */}
					<textarea
						css={textareaStyle}
						placeholder="사진에 대한 설명을 입력해주세요"
						maxLength={500}
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>

					{/* 글자수 */}
					<Text size="small" css={lengthTextStyle}>
						{content.length}/500
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StoryContent;
