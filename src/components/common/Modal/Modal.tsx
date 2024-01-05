import styled from "@emotion/styled";

type Props = {
	close?: () => void;
	component?: () => JSX.Element;
};

const Alert = ({ component, close }: Props) => {
	return (
		<Wrapper>
			<Overlay onClick={close}></Overlay>
			<Content> {component && component()}</Content>
		</Wrapper>
	);
};

export default Alert;

const Wrapper = styled.div``;
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
	position: fixed;
	display: grid;
	gap: 16px;
	top: 50%;
	left: 50%;
	padding: 16px;
	min-width: 200px;
	max-width: 400px;
	border-radius: 12px;
	overflow: hidden;
	background-color: white;
	transform: translate(-50%, -50%);
	z-index: 999;
`;
