import {
	layoutStyle,
	titleStyle,
	subStyle,
	cardStyle,
	imgStyle,
	textStyle,
} from "./Widget.style";

import SampleImg from "@assets/png/post-sample.png";

import Flex from "@components/common/Flex/Flex";

const Widget = () => {
	return (
		<Flex
			styles={{
				direction: "column",
				align: "center",
				justify: "center",
				padding: "30px 20px",
			}}
			css={layoutStyle}
		>
			<h2 css={titleStyle}>Waggle SIREN</h2>
			<h3 css={subStyle}>위험에 처한 강아지들을 도와주세요</h3>
			<Flex
				styles={{
					align: "center",
					gap: "16px",
					padding: "10px 18px",
					marginBottom: "16px",
				}}
				css={cardStyle}
			>
				<img src={SampleImg} alt="sampleImg" css={imgStyle} />
				<p css={textStyle}>Siren Title 대충 16글자는 들어감</p>
			</Flex>
			<Flex
				styles={{
					align: "center",
					gap: "16px",
					padding: "10px 18px",
					marginBottom: "16px",
				}}
				css={cardStyle}
			>
				<img src={SampleImg} alt="sampleImg" css={imgStyle} />
				<p css={textStyle}>Siren Title 대충 16글자는 들어감</p>
			</Flex>
			<Flex
				styles={{
					align: "center",
					gap: "16px",
					padding: "10px 18px",
					marginBottom: "16px",
				}}
				css={cardStyle}
			>
				<img src={SampleImg} alt="sampleImg" css={imgStyle} />
				<p css={textStyle}>Siren Title 대충 16글자는 들어감</p>
			</Flex>
			<Flex
				styles={{
					align: "center",
					gap: "16px",
					padding: "10px 18px",
					marginBottom: "16px",
				}}
				css={cardStyle}
			>
				<img src={SampleImg} alt="sampleImg" css={imgStyle} />
				<p css={textStyle}>Siren Title 대충 16글자는 들어감</p>
			</Flex>
		</Flex>
	);
};

export default Widget;
