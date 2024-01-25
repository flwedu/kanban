import { styled } from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${({ theme }) => theme.spacing["2"]};
	gap: ${({ theme }) => theme.spacing["4"]};
`;
