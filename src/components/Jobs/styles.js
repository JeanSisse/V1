import styled from 'styled-components';

const StyledJobSection = styled.section`
	max-width: 900px;

	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 50px;
		
		@media (max-width: 768px) {
			display: block;
		}
	}
`;

export const StyledProjectGrid = styled.ul`
	${({ theme }) => theme.mixs.resetList};

	a {
		position: relative;
		z-index: 1;
	}
`;

export const StyledProject = styled.li`
	position: relative;
	display: grid;
	grid-gap: 10px;

	@media (max-width: 768px) {
		${({ theme }) => theme.mixs.boxShadow}
	}
`;
export default StyledJobSection;