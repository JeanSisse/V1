import StyledHeroSection from './styles.js';

const Hero = () => {
  return (
    <StyledHeroSection className='hero__styled' id='/'>
      <div>
        <h1>Olá, meu nome é</h1>
      </div>
      <div className='h2__styled'>
        <h2 datatext="Jean Pierre D&#39;Almeida,">Jean Pierre D'Almeida,</h2>
      </div>
      <>
        <h3>sou desenvolvedor web.</h3>
      </>
      <>
        <h4>
          Desenvolvedor Full Stack.
        </h4>
      </>
      <>
        <p>
          Sou desenvolvedor de software junior especializando na Engenharia de software e
          apaixonado em criar experiências digitais incríveis. Atualmente estou focado na inserção do
          mercado de tecnologias, especificamente na área de desenvolvimento de software.
          Estou Ativamente buscando aperfeiçoamento dos conhecimentos adquiridos e agregando outros novos.
          No momento sou Engenheiro de software na <a href="https://www.ifood.com.br/">iFood</a> onde estou
          focado em desenvolver produtos acessíveis centrados no ser humano.

          {/* I&#39;m a software engineer specializing in building exceptional digital experiences. 
          Currently, I&#39;m focused on building accessible, human-centered products 
          at <a href="https://www.ifood.com.br/">iFood</a>. */}
        </p>
      </>
    </StyledHeroSection>
  );
}

export default Hero;