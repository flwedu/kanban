import { styled } from 'styled-components'

export const StyledDropLocation = styled.div`
	flex: 0 0 20px;
	opacity: 0;

	&.hovering {
		flex: 0 1 100px;
		opacity: 1;
	}
`
