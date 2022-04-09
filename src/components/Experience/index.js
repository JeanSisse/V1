import { useState } from 'react';
import StyledExperienceSection, {
  StyledButton,
  StyledHighlight, StyledTabList
} from './styles';

const Experience = () => {
  const listaDeExperiencia = ['Upstatement', 'iFood', 'Cubos', 'Pixar', 'Lexar'];
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <StyledExperienceSection id='experiencia'>
      <h2 className="numbered-heading">Onde trabalhei</h2>

      <div className="inner">
        <StyledTabList>
          {
            listaDeExperiencia &&
            listaDeExperiencia.map(
              (job, index) => {
                return (
                  <StyledButton
                    id={`tab-${index}`}
                    isActive={activeTabId === index}
                    onClick={() => setActiveTabId(index)}
                  >
                    <span>{job}</span>
                  </StyledButton>
                );
              }
            )
          }
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>
      </div>
    </StyledExperienceSection>
  );
}

export default Experience;