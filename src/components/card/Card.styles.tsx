import { styled } from "styled-components";
import { Bordered } from "../common/Bordered.styles.tsx";

export const StyledCard = styled.div`
	${Bordered};
	min-height: 3rem;
	width: 100%;

	h1 {
		font-size: 16px;
		margin-bottom: 8px;
	}

	p {
		font-size: 14px;
		margin-bottom: 0;
	}
`;
