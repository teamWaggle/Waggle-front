import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import SignUpEmail from "@/components/SignUp/Email/SignUpEmail";
import SignUpPet from "@/components/SignUp/Pet/SignUpPet";
import SignUpProfile from "@/components/SignUp/Profile/SignUpProfile";
import SignUpTab from "@/components/SignUp/SignUpTab";

import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

const SignUp = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (
			!searchParams ||
			(searchParams.get(TAB_KEY) !== SIGN_UP_TAB_KEY.EMAIL &&
				searchParams.get(TAB_KEY) !== SIGN_UP_TAB_KEY.PROFILE &&
				searchParams.get(TAB_KEY) !== SIGN_UP_TAB_KEY.PET)
		) {
			setSearchParams(`${TAB_KEY}=${SIGN_UP_TAB_KEY.EMAIL}`);
		}
	}, []);

	return (
		<Flex styles={{ direction: "column", align: "center" }} css={layoutStyle}>
			<SignUpTab />

			{searchParams.get(TAB_KEY) === SIGN_UP_TAB_KEY.EMAIL && <SignUpEmail />}

			{searchParams.get(TAB_KEY) === SIGN_UP_TAB_KEY.PROFILE && <SignUpProfile />}

			{searchParams.get(TAB_KEY) === SIGN_UP_TAB_KEY.PET && <SignUpPet />}
		</Flex>
	);
};

export default SignUp;

const layoutStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "110px 196px",
});
