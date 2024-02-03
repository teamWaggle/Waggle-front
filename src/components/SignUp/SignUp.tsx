import { useState } from "react";

import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import SignUpEmail from "@/components/SignUp/Email/SignUpEmail";
import SignUpPet from "@/components/SignUp/Pet/SignUpPet";
import SignUpProfile from "@/components/SignUp/Profile/SignUpProfile";
import SignUpTitle from "@/components/SignUp/SignUpTitle";

const SignUp = () => {
	const [titleTab, setTitleTab] = useState("이메일 인증");

	return (
		<Flex styles={{ direction: "column", align: "center" }} css={layoutStyle}>
			<SignUpTitle tab={titleTab} changeTab={setTitleTab} />

			{titleTab === "이메일 인증" ? (
				<SignUpEmail />
			) : titleTab === "프로필 입력" ? (
				<SignUpProfile />
			) : titleTab === "반려견 등록" ? (
				<SignUpPet />
			) : (
				""
			)}
		</Flex>
	);
};

export default SignUp;

const layoutStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "110px 196px",
});
