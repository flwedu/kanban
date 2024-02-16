import { darken } from "polished";
import { css, styled } from "styled-components";

export const Header = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	${({ theme: { colors } }) => css`
		background: linear-gradient(to bottom, ${colors.primary}, ${darken(0.05, colors.primary)});
	`};

	color: #ffffff;
	width: 100%;
	height: 4rem;
	margin-bottom: ${({ theme }) => theme.spacing.md};

	h1 {
		font-size: ${({ theme }) => theme.fontSize["3xl"]};
		font-family: ${({ theme }) => theme.fontFamily.title};
		line-height: 1rem;
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${({ theme }) => theme.spacing.sm};
	gap: ${({ theme }) => theme.spacing.md};
	margin: 0 auto;
	min-width: 320px;
	min-height: 100vh;
	max-width: 1280px;
`;
