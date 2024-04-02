import SampleImg from "@/assets/png/post-sample.png";
import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex, Heading } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	storyBoxStyle,
	storyCardStyle,
} from "@/components/MyPage/MyPageLog/MyPageLog.style";

const MyPageLog = () => {
	return (
		<Flex tag="main" css={layoutStyle}>
			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				Waggle Log
			</Heading>

			<Flex css={storyBoxStyle}>
				<Flex css={storyCardStyle}>
					<img src={SampleImg} alt="profileImg" />
					<MediaIcon />
				</Flex>
				<Flex css={storyCardStyle}>
					<img src={SampleImg} alt="profileImg" />
					<MediaIcon />
				</Flex>
				<Flex css={storyCardStyle}>
					<img src={SampleImg} alt="profileImg" />
					<MediaIcon />
				</Flex>
				<Flex css={storyCardStyle}>
					<img src={SampleImg} alt="profileImg" />
					<MediaIcon />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MyPageLog;
