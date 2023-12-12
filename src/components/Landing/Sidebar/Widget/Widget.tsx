import { LayoutDiv, CardDiv } from "./Widget.style";

import SampleImg from "@assets/png/post-sample.png";

const Widget = () => {
	return (
		<LayoutDiv>
			<h2>Waggle SIREN</h2>
			<h3>위험에 처한 강아지들을 도와주세요</h3>
			<CardDiv>
				<img src={SampleImg} alt="sampleImg" />
				<p>Siren Title 대충 16글자는 들어감</p>
			</CardDiv>
			<CardDiv>
				<img src={SampleImg} alt="sampleImg" />
				<p>Siren Title 대충 16글자는 들어감</p>
			</CardDiv>
			<CardDiv>
				<img src={SampleImg} alt="sampleImg" />
				<p>Siren Title 대충 16글자는 들어감</p>
			</CardDiv>
			<CardDiv>
				<img src={SampleImg} alt="sampleImg" />
				<p>Siren Title 대충 16글자는 들어감</p>
			</CardDiv>
		</LayoutDiv>
	);
};

export default Widget;
