import styled from 'styled-components';

const StyledExperienceSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;
  }
  
`;

export const StyledTabList = styled.div`
  position: relative;
  widith: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 3;
  
`;

export const StyledButton = styled.button`
  ${({ theme }) => theme.mixs.link};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;

  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0px 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;

  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  text-align: center;
  white-space: nowrap;

  &:hover, &:focus {
    background-color: var(--light-navy);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--green);
    outline: currentcolor none 0px;
  }

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }

  @media (max-width: 600px) {
    ${({ theme }) => theme.mixs.flexCenter};
  }
`;


export default StyledExperienceSection;