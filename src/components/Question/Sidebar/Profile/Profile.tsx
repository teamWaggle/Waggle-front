import DefaultProfileIcon from "@/assets/svg/profile-default.svg?react";

import Flex from "@/components/common/Flex/Flex";

import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	textStyle,
	titleStyle,
} from "@/components/Question/Sidebar/Profile/Profile.style";

const Profile = () => {
	return (
		<Flex
			styles={{
				direction: "column",
				justify: "center",
				align: "center",
				gap: "18px",
				padding: "40px",
				borderRadius: "20px",
				border: `2px solid ${Theme.color.brand_primary}`,
				width: "100%",
			}}
			css={layoutStyle}
		>
			<DefaultProfileIcon />
			<h2 css={titleStyle}>멍멍이가 좋멍</h2>
			<Flex
				styles={{
					direction: "column",
					gap: "14px",
					justify: "center",
					width: "100%",
				}}
			>
				<Flex styles={{ justify: "space-between", width: "100%" }} css={textStyle}>
					<h3>미해결 질문</h3>
					<h3>0개 {">"}</h3>
				</Flex>
				<Flex styles={{ justify: "space-between", width: "100%" }} css={textStyle}>
					<h3>지금까지 한 질문</h3>
					<h3>0개 {">"}</h3>
				</Flex>
				<Flex styles={{ justify: "space-between", width: "100%" }} css={textStyle}>
					<h3>내가 한 답변</h3>
					<h3>0개 {">"}</h3>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Profile;
