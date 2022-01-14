import StyledHeroSection from './styles.js';

const Hero = () => {
  return (
    <StyledHeroSection className='hero__styled'>
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
        I&#39;m a software engineer specializing in building 
        (and occasionally designing) exceptional digital experiences. 
        Currently, I&#39;m focused on building accessible, human-centered products 
        at iFood.
        </p>
      </>
    </StyledHeroSection>
  );
}

export default Hero;