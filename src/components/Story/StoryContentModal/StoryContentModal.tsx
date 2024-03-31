import SampleImg from "@/assets/png/post-sample.png";
import LeftArrow from "@/assets/svg/ic-left-arrow-primary.svg?react";

import { Flex, Text, Carousel } from "@/components/common";

import { useAddStoryForm } from "@/hooks/story/useAddStoryForm";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	headerStyle,
	imgBoxStyle,
	contentBoxStyle,
	profileImgStyle,
	textareaStyle,
	lengthTextStyle,
	uploadButtonStyle,
} from "@/components/Story/StoryContentModal/StoryContentModal.style";

interface StoryContentModalParams {
	uploadMediaList: string[];
}

const StoryContentModal = ({ uploadMediaList }: StoryContentModalParams) => {
	const { storyRequest, updateInputValue, handleSubmit } = useAddStoryForm({
		mediaList: uploadMediaList,
	});

	return (
		<Flex css={layoutStyle}>
			<Flex css={headerStyle}>
				<LeftArrow />
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
					글 쓰기
				</Text>
			</Flex>

			<Flex styles={{ height: "calc(100% - 54px)" }}>
				<Flex css={imgBoxStyle}>
					<Carousel
						width={740}
						height={726}
						borderRadius="0 0 0 36px"
						length={storyRequest.mediaList.length}
						showArrows={storyRequest.mediaList.length > 1}
						showDots={storyRequest.mediaList.length > 1}
						updateMediaList={storyRequest.mediaList}
						storyUpdateInputValue={updateInputValue}
						hasGallery
					>
						{storyRequest.mediaList.map((imgUrl, index) => (
							<Carousel.Item index={index} key={imgUrl}>
								<img src={imgUrl} alt="img" />
							</Carousel.Item>
						))}
					</Carousel>
				</Flex>

				<Flex css={contentBoxStyle}>
					<Flex styles={{ direction: "column", gap: "12px", width: "100%" }}>
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
							value={storyRequest.content}
							onChange={(e) => updateInputValue("content", e.target.value)}
						/>

						{/* 글자수 */}
						<Text size="small" css={lengthTextStyle}>
							{storyRequest.content.length}/500
						</Text>
					</Flex>

					<Text size="xLarge" css={uploadButtonStyle} onClick={handleSubmit}>
						업로드
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StoryContentModal;
