import StyledHeroSection from './styles.js';

const Hero = () => {
  return (
    <StyledHeroSection className='hero__styled' id='/'>
      <div>
        <h1>Hello, my name is</h1>
      </div>
      <div className='h2__styled'>
        <h2 datatext="Jean Pierre D&#39;Almeida,">Jean Pierre D'Almeida,</h2>
      </div>
      <>
        <h3>I'm software engineer.</h3>
      </>
      <>
        <h4>
          Full Stack Developer.
        </h4>
      </>
      <>
        <p>
          I'm beginer software engineer pacionate in create things that live in the internet. Currently I'm work in <a href="https://www.ifood.com.br/"> iFood </a> where I work with Salesforce development, edge applications written in other language such as Java and Kotlin.
          {/* Sou desenvolvedor de software junior especializando na Engenharia de software e
          apaixonado em criar experiências digitais incríveis. Atualmente estou focado na inserção do
          mercado de tecnologias, especificamente na área de desenvolvimento de software.
          Estou Ativamente buscando aperfeiçoamento dos conhecimentos adquiridos e agregando outros novos.
          No momento sou Engenheiro de software na <a href="https://www.ifood.com.br/">iFood</a> onde estou
          focado em desenvolver produtos acessíveis centrados no ser humano. */}

          {/* I&#39;m a software engineer specializing in building exceptional digital experiences. 
          Currently, I&#39;m focused on building accessible, human-centered products 
          at <a href="https://www.ifood.com.br/">iFood</a>. */}
        </p>
      </>
    </StyledHeroSection>
  );
}

export default Hero;