import { Flex, Box } from "@/components/common";
import Birthday from "@/components/common/BirthDay/Birthday";
import Button from "@/components/common/Design/Button/Button";
import NameInput from "@/components/SignUp/SignUpProfile/NameInput/NameInput";
import NicknameDescription from "@/components/SignUp/SignUpProfile/NicknameInput/NicknameDescription";
import NicknameInput from "@/components/SignUp/SignUpProfile/NicknameInput/NicknameInput";
import ProfileInput from "@/components/SignUp/SignUpProfile/ProfileInput/ProfileInput";
import UserUrlInput from "@/components/SignUp/SignUpProfile/UserUrlInput/UserUrlInput";

import { useFindEmailForm } from "@/hooks/auth/useFindEmailForm";
import { useSignUpProfileForm } from "@/hooks/auth/useSignUpProfileForm";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import { Theme } from "@/styles/Theme";

const SignUpProfile = () => {
  const { handleImgUpload, uploadMedia } = useSingleImgUpload({});

  const {
    selectOpen,
    handleSelectOpen,
    birthdayRequest,
    updateBirthdayValue,
    updateNameValue,
    name,
    nameRef,
    birthday,
  } = useFindEmailForm({});

  const {
    nicknameCheckComplete,
    userUrlCheckComplete,
    nicknameRef,
    userUrlRef,
    signUpProfileRequest,
    updateInputValue,
    handleNicknameCheckComplete,
    handleUserUrlCheckComplete,
    handleSubmit,
  } = useSignUpProfileForm({ name: name.value, birthday, uploadMedia });

  return (
    <Flex
      styles={{
        direction: "column",
        gap: "50px",
        width: "554px",
        marginTop: "50px",
        align: "flex-end",
      }}
    >
      <Box
        styles={{
          borderRadius: "2px",
          border: `1px solid ${Theme.color.border}`,
          padding: "60px 38px 62px",
        }}
      >
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

          {/* 닉네임 용도 설명 영역 */}
          <NicknameDescription />

          {/* 프로필 주소 영역 */}
          <UserUrlInput
            userUrl={signUpProfileRequest.userUrl}
            updateInputValue={updateInputValue}
            userUrlRef={userUrlRef}
            userUrlCheckComplete={userUrlCheckComplete}
            handleUserUrlCheckComplete={handleUserUrlCheckComplete}
          />

          {/* 이름 영역 */}
          <NameInput name={name.value} updateNameValue={updateNameValue} nameRef={nameRef} />

          {/* 생년월일 영역 */}
          <Birthday
            selectOpen={selectOpen}
            handleSelectOpen={handleSelectOpen}
            birthdayRequest={birthdayRequest}
            updateBirthdayValue={updateBirthdayValue}
          />
        </Flex>
      </Box>

      <Button onClick={handleSubmit}>다음</Button>
    </Flex>
  );
};

export default SignUpProfile;
