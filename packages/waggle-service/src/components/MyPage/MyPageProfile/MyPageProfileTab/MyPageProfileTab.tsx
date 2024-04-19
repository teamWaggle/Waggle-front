import { Fragment } from "react";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { Flex, Box, Text } from "waggle-design-system";

import { TAB_KEY, MY_PAGE_TAB_DATA } from "@/constants/tab";

import { menuItemStyle } from "@/components/MyPage/MyPageProfile/MyPageProfile.style";

const MyPageProfileTab = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const parmas = useParams();

  return (
    <Flex tag="ul" styles={{ marginTop: "24px", direction: "column", gap: "12px" }}>
      {MY_PAGE_TAB_DATA.map((tabData) => (
        <Fragment key={tabData.title}>
          {tabData.hasSub ? (
            <Flex tag="li" styles={{ direction: "column" }}>
              <Flex
                styles={{ gap: "20px", align: "center" }}
                css={menuItemStyle(
                  searchParams.get(TAB_KEY) === tabData.link ||
                    searchParams.get(TAB_KEY) === tabData.subLink
                )}
                onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${tabData.link}`)}
              >
                <Box />
                <Text size="large">{tabData.title}</Text>
              </Flex>

              <Flex styles={{ direction: "column", gap: "6px", marginTop: "10px" }}>
                {tabData.subData.map((subData) => (
                  <Flex
                    key={subData.title}
                    styles={{ gap: "20px", align: "center", paddingLeft: "24px" }}
                    css={menuItemStyle(searchParams.get(TAB_KEY) === subData.link)}
                    onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${subData.link}`)}
                  >
                    <Box />
                    <Text size="large">{subData.title}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ) : (
            <Flex
              tag="li"
              styles={{ gap: "20px", align: "center" }}
              css={menuItemStyle(searchParams.get(TAB_KEY) === tabData.link)}
              onClick={() => navigate(`/${parmas.userUrl}?${TAB_KEY}=${tabData.link}`)}
            >
              <Box />
              <Text size="large">{tabData.title}</Text>
            </Flex>
          )}
        </Fragment>
      ))}
    </Flex>
  );
};

export default MyPageProfileTab;
