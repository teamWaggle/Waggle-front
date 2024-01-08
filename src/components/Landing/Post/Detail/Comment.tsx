import SampleImg from "@assets/png/post-sample2.png";

import { Flex, Text } from "@/components/common";
import { profileStyle, infoBoxStyle, contentStyle } from "./Detail.style";

const Comment = () => {
	return (
		<Flex styles={{ gap: "8px", marginTop: "20px", padding: "0 16px" }}>
			<img src={SampleImg} alt="profileImg" css={profileStyle} />
			<Flex styles={{ direction: "column" }} css={infoBoxStyle}>
				<Text size="xSmall" css={contentStyle}>
					강아지 댕댕댕
				</Text>
				<Text size="small" css={contentStyle}>
					딴은 밤을 세워 우는 벌레는 부끄러운 이 름을 슬퍼하는 까닭입니다.
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;
