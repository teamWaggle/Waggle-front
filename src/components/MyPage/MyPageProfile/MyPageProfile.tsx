import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";

import { MY_PAGE_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	profileInfoBoxStyle,
	followButtonStyle,
	menuBoxStyle,
	menuItemStyle,
} from "@/components/MyPage/MyPageProfile/MyPageProfile.style";

interface MyPageProfileParams {
	profileImgUrl: string;
	nickname: string;
}

const MyPageProfile = ({ profileImgUrl, nickname }: MyPageProfileParams) => {
	const [searchParams] = useSearchParams();

	const navigate = useNavigate();

	const parmas = useParams();

	const follow = true;

	return (
		<Box css={layoutStyle}>
			<Flex css={profileInfoBoxStyle}>
				<img src={profileImgUrl} alt="profileImg" />

				<Box>
					<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
						{nickname}
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
				<Flex
					tag="li"
					css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.PROFILE)}
					onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.PROFILE}`)}
				>
					<Box />
					<Text size="large">프로필</Text>
				</Flex>

				<Flex
					tag="li"
					css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.LOG)}
					onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.LOG}`)}
				>
					<Box />
					<Text size="large">Waggle Log</Text>
				</Flex>

				<Flex
					tag="li"
					css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.SIREN)}
					onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.SIREN}`)}
				>
					<Box />
					<Text size="large">Siren</Text>
				</Flex>

				<Flex
					tag="li"
					css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.QUESTION)}
					onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.QUESTION}`)}
				>
					<Box />
					<Text size="large">Q&A</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default MyPageProfile;
