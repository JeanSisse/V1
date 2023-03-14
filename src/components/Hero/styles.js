import styled from 'styled-components';

const StyledHeroSection = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 1600px;
  ${({ theme }) => theme.mixs.flexStart}
  flex-direction: column;

  padding: 0px;

  h1 {
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    color: var(--green);
    font-family: var(--font-mono);
    margin-top: 15px;
    margin-bottom: 3rem;
  }
  
  .h2__styled {
    position: relative;
    display: inline-block;

    h2 {
      color: var(--green);
    }
  }

  h2,
  h3 {
    font-size: clamp(3rem, 7vw, 6rem);
    font-family: var(--font-sans);
  }
  
  h3 {
    color: var(--slate);
  }

  @media (min-width: 430px) {
    .h2__styled {
      h2 {
        color: var(--navy);
        -webkit-text-stroke: 0.05rem var(--lightest-slate);
        position: relative;
        white-space: nowrap;
      }
    } 
  
    .h2__styled h2::before {
      content: attr(datatext);
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      color: var(--lightest-slate);
      -webkit-text-stroke: 0vw var(--lightest-slate);
      border-right: 2px solid var(--lightest-slate);
      overflow: hidden;
      animation: animate 5s linear infinite;
    }
  
    @keyframes animate {
      0%,
      10%,
      100% {
        width: 0;
      }
  
      70%,
      90% {
        width: 100%;
      }
    }
  }

  h4 {
    color: var(--dark-slate);
    margin-top: 8px;
    font-size: clamp(1.5rem, 4vw, 3rem);
    font-family: var(--font-sans);
  }
  
  p {
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
  
    margin: 40px 0px 0px;
    max-width: 540px;
  }
  
`;

export default StyledHeroSection;