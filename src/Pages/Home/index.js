import Header from '../../components/Header';
import './styles.css';
import Networks from '../../components/Networks';
import Hero from '../../components/Hero';
import About from '../../components/About';

export default function Home() {

  return (
    <div className=''>
      <Header />
      <Networks />      
      <main className='' id='content'>
        <Hero />
        <About />
      </main>
    </div>
  )
}