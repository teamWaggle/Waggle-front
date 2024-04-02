import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import MyPageMain from "@/components/MyPage/MyPageMain/MyPageMain";
import MyPageProfile from "@/components/MyPage/MyPageProfile/MyPageProfile";

const MyPage = () => {
	return (
		<Flex css={layoutStyle}>
			<MyPageProfile />
			<MyPageMain />
		</Flex>
	);
};

export default MyPage;

const layoutStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "0 196px",
});
