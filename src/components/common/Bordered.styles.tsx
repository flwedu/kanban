import { darken } from "polished";
import { css } from "styled-components";

export const Bordered = css`
	border-radius: ${({ theme }) => theme.borderRadius.lg};
	box-shadow: ${({ theme }) => theme.boxShadow.md};
	border: solid 1px ${({ theme }) => theme.colors.outline};

	&:hover {
		border-color: ${({ theme }) => darken(0.15, theme.colors.outline)};
	}
`;
