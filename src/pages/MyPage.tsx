import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import MyPageLog from "@/components/MyPage/MyPageLog/MyPageLog";
import MyPageMain from "@/components/MyPage/MyPageMain/MyPageMain";
import MyPageProfile from "@/components/MyPage/MyPageProfile/MyPageProfile";
import MyPageQuestion from "@/components/MyPage/MyPageQuestion/MyPageQuestion";
import MyPageSiren from "@/components/MyPage/MyPageSiren/MyPageSiren";

import { MY_PAGE_TAB_KEY, TAB_KEY } from "@/constants/tab";

const MyPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (
			!searchParams ||
			(searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.PROFILE &&
				searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.LOG &&
				searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.SIREN &&
				searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.QUESTION)
		) {
			setSearchParams(`${TAB_KEY}=${MY_PAGE_TAB_KEY.PROFILE}`);
		}
	}, [searchParams]);

	return (
		<Flex css={layoutStyle}>
			<MyPageProfile />

			{searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.PROFILE && <MyPageMain />}

			{searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.LOG && <MyPageLog />}

			{searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.SIREN && <MyPageSiren />}

			{searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.QUESTION && <MyPageQuestion />}
		</Flex>
	);
};

export default MyPage;

const layoutStyle = css({
	maxWidth: "1144px",
	margin: "0 auto",
});
