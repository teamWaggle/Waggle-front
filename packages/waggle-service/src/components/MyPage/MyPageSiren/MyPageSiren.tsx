import { css } from "@emotion/react";

import { Flex, Heading, getDefaultTextStyle, Theme } from "waggle-design-system";

import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useMemberSirenQuery } from "@/hooks/api/member/useMemberSirenQuery";

import type { ParamUrlType } from "@/types/common";

const MyPageSiren = ({ paramUrl }: ParamUrlType) => {
  const { memberSirenData } = useMemberSirenQuery(0, paramUrl);

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

      <Flex styles={{ align: "center", wrap: "wrap", gap: "20px" }}>
        {memberSirenData.result.sirenList.map((sirenInfo) => (
          <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} isMyPage />
        ))}
      </Flex>
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
