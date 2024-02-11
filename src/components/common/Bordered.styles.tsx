import { css } from "styled-components";
import { lighten } from "polished";

export const Bordered = css`
	border-radius: ${({ theme }) => theme.borderRadius.lg};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
	border: solid 1px ${({ theme }) => theme.colors.outline};

	&:hover {
		border-color: ${({ theme }) => lighten(0.2, theme.colors.outline)};
	}
`;
