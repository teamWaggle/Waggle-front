import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Heading, Text } from "@/components/common";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import PetAddModal from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal";

import { useDeletePetMutation } from "@/hooks/api/pet/useDeletePetMutation";
import useModal from "@/hooks/useModal";

import type { PetResultType } from "@/types/pet";

import {
  petCardStyle,
  petInfoBoxStyle,
} from "@/components/MyPage/MyPageMain/MyPagePetCard/MyPagePetCard.style";

const MyPagePetCard = ({ profileImgUrl, gender, name, petId, isOwner }: PetResultType) => {
  const { mutate: deletePetMutate } = useDeletePetMutation();

  const modal = useModal();

  const deleteMutate = () => {
    deletePetMutate(petId);
  };

  const handleDeletePet = () => {
    modal.openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="반려견" handleDelete={deleteMutate} />,
      notCloseIcon: true,
    });
  };

  const handleEditPet = () => {
    modal.openModal({
      key: "PetAddModal",
      component: () => (
        <PetAddModal profileImgUrl={profileImgUrl} gender={gender} name={name} petId={petId} />
      ),
    });
  };

  return (
    <Flex css={petCardStyle}>
      <img src={profileImgUrl} alt="petImg" />

      <Flex css={petInfoBoxStyle}>
        <Flex styles={{ align: "center", gap: "6px" }}>
          {gender === "MALE" ? <MaleIcon /> : <FeMaleIcon />}

          <Heading size="xSmall">{name}</Heading>

          {isOwner && (
            <ProfileOptionMenu
              handleEditMenu={handleEditPet}
              handleDeleteMenu={handleDeletePet}
              isPet
            />
          )}
        </Flex>
        <Text>
          <span>시고르자브종</span>
          <span>2살</span>
        </Text>
        <Text>반려견 소개가 입력되지 않았습니다.</Text>
      </Flex>
    </Flex>
  );
};

export default MyPagePetCard;
