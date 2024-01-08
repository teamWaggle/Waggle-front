import SampleImg from "@assets/png/post-sample2.png";

import { Flex, Divider, Text } from "@/components/common";

import Comment from "./Comment";

import { layoutStyle, imgStyle, profileStyle, infoBoxStyle, contentStyle } from "./Detail.style";

const Detail = () => {
	return (
		<Flex css={layoutStyle}>
			<Flex styles={{ width: "741px", height: "100%", borderRadius: "42px 0 0 42px" }}>
				<img src={SampleImg} alt="sampleImg" css={imgStyle} />
			</Flex>

			<Flex styles={{ direction: "column" }}>
				<Flex styles={{ direction: "column", padding: "36px 16px" }}>
					<Flex styles={{ gap: "8px" }}>
						<img src={SampleImg} alt="profileImg" css={profileStyle} />
						<Flex styles={{ direction: "column" }} css={infoBoxStyle}>
							<Text size="xSmall" css={contentStyle}>
								강아지 댕댕댕
							</Text>
							<Text size="small" css={contentStyle}>
								딴은 밤을 세워 우는 벌레는 부끄러운 이 름을 슬퍼하는 까닭입니다. 딴은 밤을 세 워
								우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다.
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Divider length="calc(100% - 5px)" />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</Flex>
		</Flex>
	);
};

export default Detail;
