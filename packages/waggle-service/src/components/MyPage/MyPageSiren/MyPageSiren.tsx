import { css } from "@emotion/react";
import { Fragment } from "react";

import { Flex, Box, Heading, getDefaultTextStyle, Theme } from "waggle-design-system";

import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useMemberSirenQuery } from "@/hooks/api/member/useMemberSirenQuery";
import useObserver from "@/hooks/common/useObserver";

import type { ParamUrlType } from "@/types/common";

const MyPageSiren = ({ paramUrl }: ParamUrlType) => {
  const { memberSirenData, hasNextPage, fetchNextPage, isFetching } = useMemberSirenQuery(paramUrl);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Flex
      tag="main"
      styles={{
        direction: "column",
        gap: "30px",
      }}
      css={layoutStyle}
    >
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        작성한 글
      </Heading>

      <Box css={gridBoxStyle}>
        {memberSirenData.pages.map((sirenData) => (
          <Fragment key={sirenData.result.nextPageParam}>
            {sirenData.result.sirenList.map((sirenInfo) => (
              <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} isMyPage />
            ))}
          </Fragment>
        ))}
      </Box>
      <div ref={ref} />
    </Flex>
  );
};

export default MyPageSiren;

const layoutStyle = css({
  padding: "80px 0 0 30px",
  borderLeft: `1px solid ${Theme.color.border}`,
  height: "100%",
  width: "calc(100% - 311px)",
  minHeight: "100vh",
});

const gridBoxStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
});
