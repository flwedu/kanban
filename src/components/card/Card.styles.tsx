import { styled } from "styled-components";
import { Bordered } from "../common/Bordered.styles.tsx";

export const StyledCard = styled.div`
	${Bordered};
	flex: 0 1 ${({ theme }) => theme.spacing["16"]};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

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

export const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1 1 ${({ theme }) => theme.spacing["12"]};
	padding: 0.5rem 1rem;
	width: 100%;
	height: 100%;
	gap: ${({ theme }) => theme.spacing["2"]};

	h3 {
		text-overflow: ellipsis;
		overflow: hidden;
	}

	h3,
	input,
	textarea {
		text-align: left;
		font-size: ${({ theme }) => theme.fontSize["base"]};
		font-weight: 500;
		width: 100%;
		height: 100%;
		margin: 0;
	}

	input,
	textarea {
		border: none;
		resize: vertical;
	}
`;

export const CardBody = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: 1 1 ${({ theme }) => theme.spacing["4"]};
	padding: 0.5rem 1rem;

	div {
		flex: 0 1 80%;
	}
`;
