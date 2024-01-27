import { styled } from 'styled-components'

export const StyledDropLocation = styled.div`
	flex: 0 0 ${({ theme }) => theme.spacing['2']};
	opacity: 0;

	&.hovering {
		border: 1px dashed ${({ theme }) => theme.colors.gray['400']};
		flex: 0 1 ${({ theme }) => theme.spacing['16']};
		opacity: 1;
	}
`
