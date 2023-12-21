import { useLogoutMutation } from "@hooks/api/useLogoutMutation";

// import { useSetRecoilState } from "recoil";

// import { isLoggedInState } from "@/store/auth";

import Flex from "@components/common/Flex/Flex";
import Box from "@components/common/Box/Box";
import Heading from "@components/common/Heading/Heading";
import Text from "@components/common/Text/Text";
import Divider from "@components/common/Divider/Divider";

import ProfileImg from "@assets/svg/profile-gray.svg?react";

import { boxStyle, buttonStyle, headingStyle, logoutBoxStyle, textStyle } from "./Profile.style";

const Profile = () => {
	const { mutateLogOut } = useLogoutMutation();

	// const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	const handleLogOut = () => {
		mutateLogOut();
		// setIsLoggedIn(false);
	};

	return (
		<Box css={boxStyle}>
			<Flex styles={{ align: "center", gap: "14px", padding: "30px 24px 54px" }}>
				<ProfileImg />
				<Box>
					<Heading size="small" css={headingStyle}>
						김와글 님
					</Heading>
					<Text css={textStyle}>basekorea@gmail.com</Text>
				</Box>
			</Flex>

			<Divider />

			<Flex styles={{ justify: "flex-end" }} css={logoutBoxStyle}>
				<button css={buttonStyle} onClick={handleLogOut}>
					<Text>LOGOUT</Text>
				</button>
			</Flex>
		</Box>
	);
};

export default Profile;
