import CardMessage from "../../components/CardMessage";
import Header from '../../components/Header';
import './styles.css';
import useGlobal from "../../hooks/hooks-global/useGlobal";
import dowArrowImg from '../../assets/down-arrows.svg';

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
    // showAbout,
    // setShowAbout,
    // showSkills,
    // setShowSkills,
    // showExperience,
    // setShowExperience,
    // showProjects,
    // setShowProjects,
  } = useGlobal();

  return (
    <div className=''>
      <Header />
      
      <main className=''>
      
      </main>
    </div>
  )
}