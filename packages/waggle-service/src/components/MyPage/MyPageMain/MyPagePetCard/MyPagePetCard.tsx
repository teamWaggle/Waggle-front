import { Flex, Heading, Text } from "waggle-design-system";

import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import PetAddModal from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal";

import { useDeletePetMutation } from "@/hooks/api/pet/useDeletePetMutation";
import useModal from "@/hooks/common/useModal";

import type { PetDataType } from "@/types/pet";

import {
  petCardStyle,
  petInfoBoxStyle,
} from "@/components/MyPage/MyPageMain/MyPagePetCard/MyPagePetCard.style";

const MyPagePetCard = ({ petData, isOwner }: PetDataType) => {
  const { profileImgUrl, gender, name, petId, age, breed, description } = petData;

  const { mutate: deletePetMutate } = useDeletePetMutation();

  const { openModal, closeModal } = useModal();

  const deleteMutate = () => {
    deletePetMutate(petId, { onSuccess: () => closeModal() });
  };

  const handleDeletePet = () => {
    openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="반려견" handleDelete={deleteMutate} />,
      notCloseIcon: true,
    });
  };

  const handleEditPet = () => {
    openModal({
      key: "PetAddModal",
      component: () => <PetAddModal petData={petData} />,
    });
  };

  return (
    <Flex css={petCardStyle}>
      <img src={profileImgUrl} alt="petImg" />

      <Flex
        styles={{ direction: "column", gap: "14px", position: "relative" }}
        css={petInfoBoxStyle}
      >
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
          <span>{breed}</span>
          <span>{age}</span>
        </Text>
        <Text>{description ? description : "반려견 소개가 입력되지 않았습니다."}</Text>
      </Flex>
    </Flex>
  );
};

export default MyPagePetCard;
