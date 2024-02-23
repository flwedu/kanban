import { styled } from "styled-components";

export const Header = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;

	color: #ffffff;
	width: 100%;
	height: 4rem;

	h1 {
		line-height: 1rem;
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0 auto;
	min-width: 320px;
	min-height: 100vh;
	max-width: 1280px;
`;
