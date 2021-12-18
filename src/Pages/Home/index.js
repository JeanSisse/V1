import CardMessage from "../../components/CardMessage";
import Header from '../../components/Header';
import './styles.css';
import useGlobal from "../../hooks/hooks-global/useGlobal";

function ShowInfo(
  {
    children,
    infoState,
    setShowAbout,
    setShowExperience,
    setShowProjects,
    setShowSkills
  }) {
  function handleShowInfo() {
    switch(infoState) {
      case 'about':
        setShowAbout(true);
        setShowExperience(false);
        setShowProjects(false);
        setShowSkills(false);
        break;

      case 'habilities':
        setShowAbout(false);
        setShowExperience(false);
        setShowProjects(false);
        setShowSkills(true);
        break;
    
      case 'experience':
        setShowAbout(false);
        setShowExperience(true);
        setShowProjects(false);
        setShowSkills(false);
        break;

      case 'projects':
        setShowAbout(false);
        setShowExperience(false);
        setShowProjects(true);
        setShowSkills(false);
        break;

      default:
        break;
    }
  }

  return(
    <button onClick={handleShowInfo} className='show-info-btn'>
      {children}
    </button>
  );
}

export default function Home() {
  const {
    about,
    showAbout,
    setShowAbout,
    showSkills,
    setShowSkills,
    showExperience,
    setShowExperience,
    showProjects,
    setShowProjects,
  } = useGlobal();

  return (
    <div className="container">
      <Header />
      <main className='home display-flex-column justify-content-center'>
        <ShowInfo
          setShowAbout={setShowAbout}
          setShowSkills={setShowSkills}
          setShowExperience={setShowExperience}
          setShowProjects={setShowProjects}
          infoState='about'
        >
          Sobre
        </ShowInfo>
        { showAbout && 
          <CardMessage>
            {about}
          </CardMessage>
        }

        <ShowInfo
          setShowAbout={setShowAbout}
          setShowSkills={setShowSkills}
          setShowExperience={setShowExperience}
          setShowProjects={setShowProjects}
          infoState='habilities'
        >
          Habilidades
        </ShowInfo>
        { showSkills && 
          <CardMessage>
            {about}
          </CardMessage>
        }

        <ShowInfo
          setShowAbout={setShowAbout}
          setShowSkills={setShowSkills}
          setShowExperience={setShowExperience}
          setShowProjects={setShowProjects}
          infoState='experience'
        >
          Experiências
        </ShowInfo>
        { showExperience && 
          <CardMessage>
            {about}
          </CardMessage>
        }

        <ShowInfo
          setShowAbout={setShowAbout}
          setShowSkills={setShowSkills}
          setShowExperience={setShowExperience}
          setShowProjects={setShowProjects}
          infoState='projects'
        >
          Projetos
        </ShowInfo>
        { showProjects && 
          <CardMessage>
            {about}
          </CardMessage>
        }
      </main>
    </div>
  )
}