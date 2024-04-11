import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { useRecoilState } from "recoil";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PasswordEditModal from "@/components/MyPage/MyPageProfile/PasswordEditModal/PasswordEditModal";
import ProfileEditModal from "@/components/MyPage/MyPageProfile/ProfileEditModal/ProfileEditModal";

import { MY_PAGE_TAB_KEY, TAB_KEY } from "@/constants/tab";

import useModal from "@/hooks/useModal";

import { memberIdState } from "@/recoil/atoms/auth";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { MemberInfoType } from "@/types/auth";

import {
  layoutStyle,
  profileInfoBoxStyle,
  menuBoxStyle,
  menuItemStyle,
} from "@/components/MyPage/MyPageProfile/MyPageProfile.style";

const MyPageProfile = ({ profileImgUrl, nickname, memberId, name, birthday }: MemberInfoType) => {
  const [userId] = useRecoilState(memberIdState);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const parmas = useParams();

  const modal = useModal();

  const follow = true;

  const handleProfileEdit = () => {
    modal.openModal({
      key: "ProfileEditModal",
      component: () => (
        <ProfileEditModal
          profileImgUrl={profileImgUrl}
          nickname={nickname}
          name={name}
          birthday={birthday}
          memberId={memberId}
        />
      ),
    });
  };

  const handlePasswordEdit = () => {
    modal.openModal({
      key: "PasswordEditModal",
      component: () => <PasswordEditModal memberId={memberId} />,
    });
  };

  return (
    <Box css={layoutStyle}>
      <Flex css={profileInfoBoxStyle}>
        <img src={profileImgUrl} alt="profileImg" />

        <Box>
          <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
            {nickname}
          </Heading>

          <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
            <span>팔로워 36</span>
            <span>팔로잉 36</span>
          </Text>
        </Box>
      </Flex>

      {memberId === userId ? (
        <Flex styles={{ gap: "20px", margin: "24px 0" }}>
          <Button style={{ width: "130px", height: "40px" }} onClick={handleProfileEdit}>
            프로필 수정
          </Button>
          <Button
            style={{ width: "130px", height: "40px" }}
            variant="disabled"
            onClick={handlePasswordEdit}
          >
            비밀번호 변경
          </Button>
        </Flex>
      ) : (
        <Box styles={{ margin: "24px 0" }}>
          <Button
            style={{ width: "294px", height: "40px" }}
            variant={follow ? "disabled" : "default"}
          >
            {follow ? "팔로우" : "팔로잉"}
          </Button>
        </Box>
      )}

      <Divider />

      <Flex tag="ul" css={menuBoxStyle}>
        <Flex
          tag="li"
          css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.PROFILE)}
          onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.PROFILE}`)}
        >
          <Box />
          <Text size="large">프로필</Text>
        </Flex>

        <Flex
          tag="li"
          css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.LOG)}
          onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.LOG}`)}
        >
          <Box />
          <Text size="large">Waggle Log</Text>
        </Flex>

        <Flex
          tag="li"
          css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.SIREN)}
          onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.SIREN}`)}
        >
          <Box />
          <Text size="large">Siren</Text>
        </Flex>

        <Flex
          tag="li"
          css={menuItemStyle(searchParams.get(TAB_KEY) === MY_PAGE_TAB_KEY.QUESTION)}
          onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${MY_PAGE_TAB_KEY.QUESTION}`)}
        >
          <Box />
          <Text size="large">Q&A</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MyPageProfile;
