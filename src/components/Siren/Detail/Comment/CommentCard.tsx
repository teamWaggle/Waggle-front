import SampleImg from "@assets/png/post-sample.png";
import OptionIcon from "@assets/svg/option.svg?react";

import { Flex, Text } from "@components/common";

import { imgStyle, nameStyle, dateStyle, textStyle, replyBoxStyle } from "./Comment.style";

const CommentCard = () => {
	return (
		<Flex styles={{ position: "relative", width: "100%" }}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
			<Flex styles={{ direction: "column", marginLeft: "14px" }}>
				<Flex styles={{ gap: "14px", align: "center" }}>
					<Text css={nameStyle}>멍댕멍댕</Text>
					<Text size="small" css={dateStyle}>
						23.12.27 21:21
					</Text>
				</Flex>
				<Text size="large" css={textStyle}>
					더 많은 사람들이 이런 유용한 정보를 알게 되기를 바랍니다. 감사합니다!
				</Text>
			</Flex>

			<Flex styles={{ align: "center", gap: "16px" }} css={replyBoxStyle}>
				<Text>답글</Text>
				<OptionIcon />
			</Flex>
		</Flex>
	);
};

export default CommentCard;
