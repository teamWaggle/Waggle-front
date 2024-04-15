import { useRecoilValue } from "recoil";

import { Flex, Box, Heading } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import MyPagePetCard from "@/components/MyPage/MyPageMain/MyPagePetCard/MyPagePetCard";
import PetAddModal from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal";

import { usePetQuery } from "@/hooks/api/pet/usePetQuery";
import useModal from "@/hooks/useModal";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { ParamUrlType } from "@/types/common";

import { layoutStyle, petCardBoxStyle } from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = ({ paramUrl }: ParamUrlType) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { petData } = usePetQuery(paramUrl);
  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const userUrl = userData ? userData.userUrl : "";

  const modal = useModal();

  const handlePetAdd = () => {
    modal.openModal({
      key: "PetAddModal",
      component: () => <PetAddModal />,
    });
  };

  return (
    <Box tag="main" css={layoutStyle}>
      <Flex styles={{ justify: "space-between", align: "center" }}>
        <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
          반려견 소개
        </Heading>
        <Button onClick={handlePetAdd}>반려견 추가</Button>
      </Flex>

      <Flex css={petCardBoxStyle}>
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
    </Box>
  );
};

export default MyPageMain;
