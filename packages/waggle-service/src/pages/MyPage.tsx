import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import MyPageLog from "@/components/MyPage/MyPageLog/MyPageLog";
import MyPageMain from "@/components/MyPage/MyPageMain/MyPageMain";
import MyPageProfile from "@/components/MyPage/MyPageProfile/MyPageProfile";
import MyPageQuestion from "@/components/MyPage/MyPageQuestion/MyPageQuestion";
import MyPageSiren from "@/components/MyPage/MyPageSiren/MyPageSiren";

import { MY_PAGE_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";

const MyPage = () => {
  const { userUrl: paramUrl } = useParams();

  const { memberData } = useMemberInfoQuery(paramUrl);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (
      !searchParams ||
      (searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.PROFILE &&
        searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.LOG &&
        searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.SIREN_POST &&
        searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.SIREN_COMMENT &&
        searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.QUESTION_POST &&
        searchParams.get(TAB_KEY) !== MY_PAGE_TAB_KEY.QUESTION_COMMENT)
    ) {
      setSearchParams(`${TAB_KEY}=${MY_PAGE_TAB_KEY.PROFILE}`);
    }
  }, [searchParams]);

  return (
    <Flex css={layoutStyle}>
      <MyPageProfile memberData={memberData.result} />

      {searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.PROFILE && <MyPageMain paramUrl={paramUrl} />}

      {searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.LOG && <MyPageLog paramUrl={paramUrl} />}

      {searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.SIREN_POST && (
        <MyPageSiren paramUrl={paramUrl} />
      )}

      {searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.QUESTION_POST && <MyPageQuestion />}
    </Flex>
  );
};

export default MyPage;

const layoutStyle = css({
  maxWidth: "1144px",
  margin: "0 auto",
});
