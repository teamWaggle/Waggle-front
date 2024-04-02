import SampleImg from "@/assets/png/post-sample.png";

import { Flex, Heading } from "@/components/common";
import StoryCard from "@/components/Story/StoryCard/StoryCard";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { layoutStyle, storyBoxStyle } from "@/components/MyPage/MyPageLog/MyPageLog.style";

const MyPageLog = () => {
	return (
		<Flex tag="main" css={layoutStyle}>
			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				Waggle Log
			</Heading>

			<Flex css={storyBoxStyle}>
				<StoryCard boardId={369} thumbnail={SampleImg} />
				<StoryCard boardId={369} thumbnail={SampleImg} />
				<StoryCard boardId={369} thumbnail={SampleImg} />
				<StoryCard boardId={369} thumbnail={SampleImg} />
			</Flex>
		</Flex>
	);
};

export default MyPageLog;
