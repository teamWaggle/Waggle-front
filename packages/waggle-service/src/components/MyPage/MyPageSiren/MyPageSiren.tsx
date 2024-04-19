import { Flex, Heading } from "waggle-design-system";

import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useMemberSirenQuery } from "@/hooks/api/member/useMemberSirenQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { ParamUrlType } from "@/types/common";

const MyPageSiren = ({ paramUrl }: ParamUrlType) => {
  const { memberSirenData } = useMemberSirenQuery(0, paramUrl);

  return (
    <Flex
      tag="main"
      styles={{
        direction: "column",
        gap: "30px",
        marginTop: "80px",
        paddingLeft: "30px",
        width: "calc(100% - 311px)",
      }}
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
