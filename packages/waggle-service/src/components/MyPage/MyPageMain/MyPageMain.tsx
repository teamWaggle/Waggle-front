import { useRecoilValue } from "recoil";

import { Flex, Box, Heading, Button, Theme, getDefaultTextStyle } from "waggle-design-system";

import MyPagePetCard from "@/components/MyPage/MyPageMain/MyPagePetCard/MyPagePetCard";
import PetAddModal from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal";

import { usePetQuery } from "@/hooks/api/pet/usePetQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import useModal from "@/hooks/common/useModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { ParamUrlType } from "@/types/common";

import { layoutStyle } from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = ({ paramUrl }: ParamUrlType) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { petData } = usePetQuery(paramUrl);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const userUrl = userData ? userData.userUrl : "";

  const { openModal } = useModal();

  const handlePetAdd = () => {
    openModal({
      key: "PetAddModal",
      component: () => <PetAddModal petData={{}} />,
    });
  };

  return (
    <Box css={layoutStyle}>
      <Flex styles={{ justify: "space-between", align: "center" }}>
        <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
          반려견 소개
        </Heading>
        <Button onClick={handlePetAdd}>반려견 추가</Button>
      </Flex>

      <Flex styles={{ direction: "column", gap: "20px", marginTop: "30px" }}>
        {petData.result.map((petInfo) => (
          <MyPagePetCard key={petInfo.petId} petData={petInfo} isOwner={userUrl === paramUrl} />
        ))}
      </Flex>
    </Box>
  );
};

export default MyPageMain;
