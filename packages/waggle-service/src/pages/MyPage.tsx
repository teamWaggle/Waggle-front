import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import MyPageLog from "@/components/MyPage/MyPageLog/MyPageLog";
import MyPageMain from "@/components/MyPage/MyPageMain/MyPageMain";
import MyPageProfile from "@/components/MyPage/MyPageProfile/MyPageProfile";
import MyPageQuestion from "@/components/MyPage/MyPageQuestion/MyPageQuestion";
import MyPageSiren from "@/components/MyPage/MyPageSiren/MyPageSiren";
import MyPageComment from "@/components/MyPage/MyPageComment/MyPageComment";

import { MY_PAGE_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";

const MyPage = () => {
  const { userUrl: paramUrl } = useParams();

  const { memberData } = useMemberInfoQuery(paramUrl);

  const [searchParams, setSearchParams] = useSearchParams();

  const validTabs = Object.values(MY_PAGE_TAB_KEY);
  const tabMode = searchParams.get(TAB_KEY);

  useEffect(() => {
    if (tabMode === null || validTabs.includes(tabMode) === false) {
      setSearchParams(`${TAB_KEY}=${MY_PAGE_TAB_KEY.PROFILE}`);
    }
  }, [searchParams]);

  return (
    <Flex css={layoutStyle}>
      <MyPageProfile memberData={memberData.result} />

      {tabMode === MY_PAGE_TAB_KEY.PROFILE && <MyPageMain paramUrl={paramUrl} />}

      {tabMode === MY_PAGE_TAB_KEY.LOG && <MyPageLog paramUrl={paramUrl} />}

      {tabMode === MY_PAGE_TAB_KEY.SIREN_POST && <MyPageSiren paramUrl={paramUrl} />}

      {(tabMode === MY_PAGE_TAB_KEY.SIREN_COMMENT ||
        tabMode === MY_PAGE_TAB_KEY.QUESTION_COMMENT) && (
        <MyPageComment
          paramUrl={paramUrl}
          isQuestion={tabMode === MY_PAGE_TAB_KEY.QUESTION_COMMENT}
        />
      )}

      {tabMode === MY_PAGE_TAB_KEY.QUESTION_POST && <MyPageQuestion paramUrl={paramUrl} />}
    </Flex>
  );
};

export default MyPage;

const layoutStyle = css({
  maxWidth: "1144px",
  margin: "0 auto",
});
