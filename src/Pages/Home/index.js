import Header from '../../components/Header';
import './styles.css';
import Networks from '../../components/Networks';
import Hero from '../../components/Hero';

export default function Home() {

  return (
    <div className=''>
      <Header />
      <Networks />      
      <main className=''>
        <Hero />
      </main>
    </div>
  )
}