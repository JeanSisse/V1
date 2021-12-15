import CardMessage from "../../components/CardMessage";
import Header from '../../components/Header';
import './styles.css';


function ShowInfo({ children }) {
  return(
    <button className='show-info-btn'>
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className='home display-flex-column justify-content-center'>
        <ShowInfo>
          Sobre
        </ShowInfo>
        <CardMessage>
          Desenvolvedor de software Full Stack, aberto para todas as stacks, Front End ou Back End.
          Domínio nas tecnologias como Node.js (com foco em API REST), React.js e SQL. Proativo, 
          foco e organização me permitem atingir meus objetivos pontualmente. Disciplinado, pontual 
          e autodidata. Aberto e preparado para o desafio de exercer novas funções e atividades com flexibilidade.
      </CardMessage>
      </main>
    </div>
  )
}