import { styled } from "styled-components";
import { Bordered } from "../common/Bordered.styles.tsx";

export const StyledBoard = styled.div<{
	$color?: string;
}>`
	${Bordered};

	padding: 0 1rem 1rem;
	margin-bottom: 16px;
	height: 30rem;
	width: 100%;
	flex: 0 0 ${({ theme }) => theme.spacing["72"]};
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

export const BoardHeader = styled.div<{
	$color?: string;
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: solid 1px ${({ theme }) => theme.colors.gray["500"]};
	width: 100%;
	height: ${({ theme }) => theme.spacing["12"]};
	flex: 1 0 ${({ theme }) => theme.spacing["12"]};
	order: 1;
	gap: ${({ theme }) => theme.spacing["2"]};

	h2,
	input {
		font-size: ${({ theme }) => theme.fontSize["lg"]};
		font-weight: 500;
		background-color: ${({ $color }) => $color ?? "transparent"};
		border-radius: ${({ theme }) => theme.borderRadius["md"]};
		padding: 0 ${({ theme }) => theme.spacing["2"]};
		width: 100%;
	}

	& [data-hidden-without-hover] {
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.25s;
	}

	&:hover [data-hidden-without-hover] {
		opacity: 1;
		pointer-events: auto;
	}
`;

export const BoardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: ${({ theme }) => theme.spacing["1"]};
	height: 100%;
	width: 100%;
	margin-bottom: 1rem;
	overflow-y: auto;
	order: 2;
`;
