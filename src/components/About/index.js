import styled from "styled-components";

const StyledAbaoutSection = styled.section`
  max-width: 1000px;
  color: var(--slate);
  font-family: var(--font-sans);
  font-size: var(--fz-xl);
  line-height: 1.3;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  return(
    <StyledAbaoutSection id='about'>
      <h2 className='numbered-heading'>About Me</h2>

      <div className="inner">
        <StyledText>
          <>
            <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &#38; CSS!
            </p>
            <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &#38; CSS!
            </p>
            <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &#38; CSS!
            </p>

            <p>
              Here are a few technologies I&#39;ve been working with recently:
            </p>
          </>

          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express</li>
            <li>TDD</li>
          </ul>
        </StyledText>

        <div className="styledPic"></div>

      </div>
    </StyledAbaoutSection>
  );
}

export default About;