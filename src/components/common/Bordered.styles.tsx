import { css } from "styled-components";

export const Bordered = css`
	border-radius: ${({ theme }) => theme.borderRadius.lg};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
	border: solid 1px ${({ theme }) => theme.colors.gray["600"]};

	&:hover {
		border-color: ${({ theme }) => theme.colors.gray["500"]};
	}
`;
