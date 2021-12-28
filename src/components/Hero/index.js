import './styles.css';

const Hero = () => {
  return (
    <section className='hero__styled'>
      <div className='.h1__dataText'>
        <h1 data-text-1='Olá, meu nome é'>Olá, meu nome é</h1>
      </div>
      <div className='h2__styled'>
        <h2 datatext="Jean Pierre D'Almeida,">Jean Pierre D'Almeida,</h2>
      </div>
      <>
        <h3>desenvolvedor web</h3>
      </>
      <>
        <h4>
          Desenvolvedor Full Stack.
        </h4>
      </>
    </section>
  );
}

export default Hero;