import { useState } from "react"

export default function useGlobalProvider() {
  const [about, setAbout] = useState(`Desenvolvedor de software Full Stack, aberto para todas as stacks, Front End ou Back End. 
  Domínio nas tecnologias como Node.js (com foco em API REST), React.js e SQL. Proativo, 
  foco e organização me permitem atingir meus objetivos pontualmente. Disciplinado, pontual 
  e autodidata. Aberto e preparado para o desafio de exercer novas funções e atividades com flexibilidade.`);
  const [skills, setSkills] = useState('SKILLS');
  const [experience, setExperience] = useState('EXPEREINCE');
  const [projects, setProjects] = useState('PROJECTS');

  const [showAbout, setShowAbout] = useState(true);
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return {
    about,
    setAbout,
    skills,
    setSkills,
    experience,
    setExperience,
    projects,
    setProjects,
    showAbout,
    setShowAbout,
    showSkills,
    setShowSkills,
    showExperience,
    setShowExperience,
    showProjects,
    setShowProjects
  };
}