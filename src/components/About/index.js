import styled from "styled-components";
import jpImg from '../../assets/jp-sisse.jpeg';

const StyledAbaoutSection = styled.section`
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

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 339px) {
      display: flex;
      flex-direction: column;
    }

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

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixs.boxShadow};
    display: bloc;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      vertical-align: middle;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {

  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'Express'];
  return(
    <StyledAbaoutSection id='about'>
      <h2 className='numbered-heading'>About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Olá, me chamo Jean Pierre - eu sou desenvolvedor full-stack que gosta de criar coisas que vivem na internet. 
              Eu sempre tive paixão em me desafiar o que me levou a fazer curso de <b>Ciência da Computação</b> pela <a href="https://www.unb.br/">Universidade 
              de Brasília</a> -  onde acabei 
              apaixonando pela área de tecnologia e de criação de softwares.
            </p>
            <p>
              Também tive oportunidade de participar no curso intensivo oferecido pela <a href="https://cubos.academy/">Cubos Academy</a> em 
              parceria com <a href="https://www.ifood.com.br/">iFood</a> onde aprendi muito sobre desenvolvimento web.
            </p>

            <p>
              Seguem algumas tecnologias com os quais tenho trabalhado recentemente:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img className="img" src={jpImg} alt="Apresentação" />
          </div>
        </StyledPic>

      </div>
    </StyledAbaoutSection>
  );
}

export default About;