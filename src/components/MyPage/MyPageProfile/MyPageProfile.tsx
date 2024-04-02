import SampleImg from "@/assets/png/post-sample.png";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	profileInfoBoxStyle,
	followButtonStyle,
	menuBoxStyle,
	menuItemStyle,
} from "@/components/MyPage/MyPageProfile/MyPageProfile.style";

const MyPageProfile = () => {
	const follow = true;

	return (
		<Box css={layoutStyle}>
			<Flex css={profileInfoBoxStyle}>
				<img src={SampleImg} alt="profileImg" />

				<Box>
					<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
						멍멍이가 좋개
					</Heading>

					<Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
						<span>팔로워 36</span>
						<span>팔로잉 36</span>
					</Text>
				</Box>
			</Flex>

			<button css={followButtonStyle(follow)}>{follow ? "팔로우" : "팔로잉"}</button>

			<Divider />

			<Flex tag="ul" css={menuBoxStyle}>
				<Flex tag="li" css={menuItemStyle(true)}>
					<Box />
					<Text size="large">프로필</Text>
				</Flex>
				<Flex tag="li" css={menuItemStyle(false)}>
					<Box />
					<Text size="large">Waggle Log</Text>
				</Flex>
				<Flex tag="li" css={menuItemStyle(false)}>
					<Box />
					<Text size="large">Siren</Text>
				</Flex>
				<Flex tag="li" css={menuItemStyle(false)}>
					<Box />
					<Text size="large">Q&A</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default MyPageProfile;
