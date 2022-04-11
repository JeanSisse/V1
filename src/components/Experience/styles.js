import styled from 'styled-components';

const StyledExperienceSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;
  }
  
`;

export const StyledTabList = styled.div`
  position: relative;
  width: max-content;
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

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }

  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixs.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
    .company {
      color: var(--green);
    }
  }
  
  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

export default StyledExperienceSection;