import { Suspense, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import { Flex } from "waggle-design-system";

import MyPageLog from "@/components/MyPage/MyPageLog/MyPageLog";
import MyPageMain from "@/components/MyPage/MyPageMain/MyPageMain";
import MyPageProfile from "@/components/MyPage/MyPageProfile/MyPageProfile";
import MyPageQuestion from "@/components/MyPage/MyPageQuestion/MyPageQuestion";
import MyPageSiren from "@/components/MyPage/MyPageSiren/MyPageSiren";
import MyPageComment from "@/components/MyPage/MyPageComment/MyPageComment";

import { MY_PAGE_TAB_KEY, TAB_KEY } from "@/constants/tab";

const MyPage = () => {
  const { userUrl: paramUrl } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const validTabs = Object.values(MY_PAGE_TAB_KEY);
  const tabMode = searchParams.get(TAB_KEY);

  const myPageContents = () => {
    if (tabMode === null) return;

    const contentsComponent = {
      [MY_PAGE_TAB_KEY.PROFILE]: () => <MyPageMain paramUrl={paramUrl} />,
      [MY_PAGE_TAB_KEY.LOG]: () => <MyPageLog paramUrl={paramUrl} />,
      [MY_PAGE_TAB_KEY.SIREN_POST]: () => <MyPageSiren paramUrl={paramUrl} />,
      [MY_PAGE_TAB_KEY.SIREN_POST]: () => <MyPageQuestion paramUrl={paramUrl} />,
      [MY_PAGE_TAB_KEY.SIREN_COMMENT]: () => <MyPageComment paramUrl={paramUrl} />,
      [MY_PAGE_TAB_KEY.QUESTION_COMMENT]: () => <MyPageComment paramUrl={paramUrl} isQuestion />,
    };

    const renderComponent = contentsComponent[tabMode];

    return renderComponent ? renderComponent() : null;
  };

  useEffect(() => {
    if (tabMode === null || validTabs.includes(tabMode) === false) {
      setSearchParams(`${TAB_KEY}=${MY_PAGE_TAB_KEY.PROFILE}`);
    }
  }, [searchParams, tabMode]);

  return (
    <Flex css={layoutStyle} styles={{ margin: "0 auto", width: "100%" }}>
      <Suspense fallback={<div></div>}>
        <MyPageProfile paramUrl={paramUrl} />

        {myPageContents()}
      </Suspense>
    </Flex>
  );
};

export default MyPage;

const layoutStyle = css({
  maxWidth: "1154px",
});
