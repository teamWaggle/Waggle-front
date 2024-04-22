import { css } from "@emotion/react";

import { Modal, Flex, Theme, Button } from "waggle-design-system";

import Birthday from "@/components/common/BirthDay/Birthday";
import NameInput from "@/components/SignUp/SignUpProfile/NameInput/NameInput";
import NicknameInput from "@/components/SignUp/SignUpProfile/NicknameInput/NicknameInput";
import ProfileInput from "@/components/SignUp/SignUpProfile/ProfileInput/ProfileInput";

import { useFindEmailForm } from "@/hooks/auth/useFindEmailForm";
import { useSignUpProfileForm } from "@/hooks/auth/useSignUpProfileForm";
import { useSingleImgUpload } from "@/hooks/common/useSingleImgUpload";

import type { MemberDataType } from "@/types/auth";

interface ProfileEditModalProps extends MemberDataType {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileEditModal = ({ memberData, isOpen, onClose }: ProfileEditModalProps) => {
  const { profileImgUrl, nickname, memberId, name, birthday } = memberData;

  const { handleImgUpload, uploadMedia } = useSingleImgUpload({ prevImg: profileImgUrl });

  const {
    selectOpen,
    handleSelectOpen,
    birthdayRequest,
    updateBirthdayValue,
    updateNameValue,
    name: newName,
    nameRef,
    birthday: newBirthday,
  } = useFindEmailForm({
    prevName: { value: name },
    prevBirthday: {
      year: birthday.split("-")[0],
      month: String(+birthday.split("-")[1]),
      day: String(+birthday.split("-")[2]),
    },
  });

  const {
    nicknameCheckComplete,
    nicknameRef,
    signUpProfileRequest,
    updateInputValue,
    handleNicknameCheckComplete,
    handleSubmit,
  } = useSignUpProfileForm({
    name: newName.value,
    birthday: newBirthday,
    uploadMedia,
    prevReqeust: {
      nickname,
      userUrl: "",
    },
    memberId,
  });

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <Flex styles={{ direction: "column", align: "center", gap: "50px" }} css={layoutStyle}>
        <Flex styles={{ direction: "column", gap: "36px" }}>
          <ProfileInput handleImgUpload={handleImgUpload} uploadMedia={uploadMedia} />

          <NicknameInput
            nickname={signUpProfileRequest.nickname}
            updateInputValue={updateInputValue}
            nicknameRef={nicknameRef}
            nicknameCheckComplete={nicknameCheckComplete}
            handleNicknameCheckComplete={handleNicknameCheckComplete}
          />

          <NameInput name={newName.value} updateNameValue={updateNameValue} nameRef={nameRef} />

          <Birthday
            selectOpen={selectOpen}
            handleSelectOpen={handleSelectOpen}
            birthdayRequest={birthdayRequest}
            updateBirthdayValue={updateBirthdayValue}
          />

          <Button onClick={handleSubmit} style={{ alignSelf: "flex-end" }}>
            저장
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ProfileEditModal;

const layoutStyle = css({
  width: "554px",
  backgroundColor: Theme.color.white,
  padding: "60px 38px 62px",
});
