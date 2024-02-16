import { darken, readableColor } from "polished";
import { styled } from "styled-components";

export const StyledBoard = styled.div<{
	$color?: string;
}>`
	padding: 0 1rem 1rem;
	margin-bottom: 16px;
	height: 30rem;
	width: 100%;
	flex: 0 0 23rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(3px);
	border-radius: ${({ theme }) => theme.borderRadius.xl};
	border: solid 1px ${({ theme }) => theme.colors.outline};

	&:hover {
		border-color: ${({ theme }) => darken(0.15, theme.colors.outline)};
	}
`;

export const BoardHeader = styled.div<{
	$color?: string;
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: solid 1px ${({ theme }) => theme.colors.outline};
	width: 100%;
	height: 3rem;
	flex: 1 0 3rem;
	order: 1;
	gap: ${({ theme }) => theme.spacing.lg};
	color: ${({ $color, theme: { pureColors } }) => readableColor($color ?? pureColors.lightText, pureColors.darkText)};

	h2,
	input {
		font-size: ${({ theme }) => theme.fontSize["lg"]};
		font-weight: 500;
		background-color: ${({ $color }) => $color ?? "transparent"};
		border-radius: ${({ theme }) => theme.borderRadius["md"]};
		padding: 0 ${({ theme }) => theme.spacing.sm};
		width: 100%;
		color: inherit;
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
	gap: ${({ theme }) => theme.spacing.sm};
	height: 100%;
	width: 100%;
	margin-bottom: 1rem;
	overflow-y: auto;
	order: 2;
`;
