import styled from "styled-components";

const StyledAbaoutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const About = () => {
  return(
    <StyledAbaoutSection id='about'>
      <h2 className='numbered-heading'>Sobre</h2>

      <div className="inner">

      </div>
    </StyledAbaoutSection>
  );
}

export default About;