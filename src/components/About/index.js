import jpImg from '../../assets/jp-sisse.jpeg';
import StyledAbaoutSection, { StyledPic, StyledText } from "./style";

const About = () => {

  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Styled Component',
    'Node.js',
    'Express',
    'Java 8+',
    'Spring Boot',
    'Spring Security',
    'PostgresSQL'
  ];

  return (
    <StyledAbaoutSection id='sobre'>
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