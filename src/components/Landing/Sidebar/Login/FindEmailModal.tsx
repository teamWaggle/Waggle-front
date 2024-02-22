import { useState } from "react";

import { Flex, Heading, Text, Logo } from "@/components/common";
import FindEmail from "@/components/Landing/Sidebar/Login/FindEmail";
import ResultEmail from "@/components/Landing/Sidebar/Login/ResultEmail";

import type { modalCloseType } from "@/types/modal";

import {
	layoutStyle,
	headingStyle,
	textStyle,
} from "@/components/Landing/Sidebar/Login/FindEmailModal.style";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FindEmailModal = ({ modalClose }: modalCloseType) => {
	const [mode, setMode] = useState("find");
	const [email, setEmail] = useState<string[]>([""]);

	return (
		<Flex
			styles={{
				direction: "column",
				align: "center",
				gap: "60px",
			}}
			css={layoutStyle}
		>
			<Flex
				styles={{
					direction: "column",
					align: "center",
					gap: "14px",
				}}
			>
				<Logo width={138} height={30} />
				<Heading size="xSmall" css={headingStyle}>
					아이디(이메일) 찾기
				</Heading>
				<Text css={textStyle}>
					{mode === "find"
						? "계정에 등록된 이름과 생년월일이 일치하는 경우\n사용중인 계정의 아이디를 알려드립니다"
						: "인증한 이름과 생년월일로 가입된 계정입니다."}
				</Text>
			</Flex>

			{mode === "find" ? (
				<FindEmail setMode={setMode} setEmail={setEmail} />
			) : (
				<ResultEmail email={email} modalClose={modalClose} />
			)}
		</Flex>
	);
};

export default FindEmailModal;
