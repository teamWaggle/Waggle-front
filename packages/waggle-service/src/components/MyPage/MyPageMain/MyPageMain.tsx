import { useRecoilValue } from "recoil";

import { Flex, Box, Heading, Button, useOverlay, Theme } from "waggle-design-system";

import MyPagePetCard from "@/components/MyPage/MyPageMain/MyPagePetCard/MyPagePetCard";
import PetAddModal from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal";

import { usePetQuery } from "@/hooks/api/pet/usePetQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { ParamUrlType } from "@/types/common";

import { layoutStyle } from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = ({ paramUrl }: ParamUrlType) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { petData } = usePetQuery(paramUrl);
  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const userUrl = userData ? userData.userUrl : "";

  const {
    isOpen: isPetAddModalOpen,
    close: closePetAddModal,
    open: openPetAddModal,
  } = useOverlay();

  return (
    <Box css={layoutStyle}>
      <Flex styles={{ justify: "space-between", align: "center" }}>
        <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
          반려견 소개
        </Heading>
        <Button onClick={openPetAddModal}>반려견 추가</Button>
      </Flex>

      <Flex styles={{ direction: "column", gap: "20px", marginTop: "30px" }}>
        {petData.result.map((petInfo) => (
          <MyPagePetCard
            key={petInfo.petId}
            profileImgUrl={petInfo.profileImgUrl}
            gender={petInfo.gender}
            name={petInfo.name}
            petId={petInfo.petId}
            isOwner={userUrl === paramUrl}
          />
        ))}
      </Flex>

      {isPetAddModalOpen && <PetAddModal isOpen={isPetAddModalOpen} onClose={closePetAddModal} />}
    </Box>
  );
};

export default MyPageMain;
