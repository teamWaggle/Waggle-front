import { Flex } from "@/components/common";
import Birthday from "@/components/common/BirthDay/Birthday";
import Button from "@/components/common/Design/Button/Button";
import NameInput from "@/components/SignUp/SignUpProfile/NameInput/NameInput";
import NicknameInput from "@/components/SignUp/SignUpProfile/NicknameInput/NicknameInput";
import ProfileInput from "@/components/SignUp/SignUpProfile/ProfileInput/ProfileInput";

import { useFindEmailForm } from "@/hooks/auth/useFindEmailForm";
import { useSignUpProfileForm } from "@/hooks/auth/useSignUpProfileForm";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import type { MemberInfoType } from "@/types/auth";

import { layoutStyle } from "@/components/MyPage/MyPageProfile/ProfileEditModal/ProfileEditModal.style";

const ProfileEditModal = ({
  profileImgUrl,
  nickname,
  memberId,
  name,
  birthday,
}: MemberInfoType) => {
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
    <Flex css={layoutStyle}>
      <Flex styles={{ direction: "column", gap: "36px" }}>
        {/* 프로필 영역 */}
        <ProfileInput handleImgUpload={handleImgUpload} uploadMedia={uploadMedia} />

        {/* 닉네임 영역 */}
        <NicknameInput
          nickname={signUpProfileRequest.nickname}
          updateInputValue={updateInputValue}
          nicknameRef={nicknameRef}
          nicknameCheckComplete={nicknameCheckComplete}
          handleNicknameCheckComplete={handleNicknameCheckComplete}
        />

        {/* 이름 영역 */}
        <NameInput name={newName.value} updateNameValue={updateNameValue} nameRef={nameRef} />

        {/* 생년월일 영역 */}
        <Birthday
          selectOpen={selectOpen}
          handleSelectOpen={handleSelectOpen}
          birthdayRequest={birthdayRequest}
          updateBirthdayValue={updateBirthdayValue}
        />

        <Button onClick={handleSubmit}>저장</Button>
      </Flex>
    </Flex>
  );
};

export default ProfileEditModal;
