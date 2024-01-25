import { styled } from "styled-components";
import { Bordered } from "../common/Bordered.styles.tsx";

export const StyledBoard = styled.div`
	${Bordered};

	padding: 0 1rem;
	margin-bottom: 16px;
	min-height: 30rem;
	width: ${({ theme }) => theme.spacing["64"]};
`;

export const BoardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: solid 1px ${({ theme }) => theme.colors.gray["500"]};
	height: ${({ theme }) => theme.spacing["12"]};

	h2 {
		font-size: ${({ theme }) => theme.fontSize["lg"]};
	}
`;

export const BoardBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing["4"]};
	height: 100%;
`;
