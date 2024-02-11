import { styled } from 'styled-components'

export const StyledDropLocation = styled.div`
	flex: 0 0 ${({ theme }) => theme.spacing.sm};
	opacity: 0;

	&.hovering {
		border: 1px dashed ${({ theme }) => theme.colors.outline};
		flex: 0 1 100px;
		opacity: 1;
	}
`
