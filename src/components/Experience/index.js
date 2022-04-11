import fm from 'front-matter';
import { useEffect, useState } from 'react';
import StyledExperienceSection, {
  StyledButton,
  StyledHighlight,
  StyledTabList,
  StyledTabPanels,
  StyledTabPanel
} from './styles';
import { CSSTransition } from 'react-transition-group';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [content, setContent] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  async function fetcData(data) {
    let obj = {};
    await fetch(data.default).then(res => res.text()).then(md => {

      const { attributes, body } = fm(md);
      obj = {
        'frontmatter': {
          "titulo": attributes.titulo,
          "companhia": attributes.companhia,
          "local": attributes.local,
          "tempo": attributes.tempo,
          "url": attributes.url
        },
        'html': body
      };
    });
    return obj;
  }

  async function createContent(arrayFiles) {
    const node = [];
    for (const obj of arrayFiles) {
      node.push(await fetcData(obj));
    };
    setContent(node);
    return;
  }

  async function importFilesMd() {
    const mds = importAll(require.context('../../content/jobs/', true, /\.\/[^/]+\/index\.md$/));
    await createContent(mds);
    return;
  }

  useEffect(() => {
    importFilesMd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledExperienceSection id='experiencia'>
      <h2 className="numbered-heading">Onde trabalhei</h2>

      <div className="inner">
        <StyledTabList>
          {
            content &&
            content.map(
              (node, index) => {
                const { companhia } = node.frontmatter;
                return (
                  <StyledButton
                    id={`tab-${index}`}
                    key={index}
                    isActive={activeTabId === index}
                    onClick={() => setActiveTabId(index)}
                  >
                    <span>{companhia}</span>
                  </StyledButton>
                );
              }
            )
          }
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {content &&
            content.map((node, index) => {
              const { frontmatter, html } = node;
              const { titulo, url, companhia, tempo } = frontmatter;

              return (
                <CSSTransition
                  key={index}
                  in={activeTabId === index}
                  timeout={250}

                >
                  <StyledTabPanel
                    id={`panel-${index}`}
                    role="tabpanel"
                    tabIndex={activeTabId === index ? '0' : '-1'}
                    aria-labelledby={`tab-${index}`}
                    aria-hidden={activeTabId !== index}
                    hidden={activeTabId !== index}
                  >
                    <h3>
                      <span>{titulo}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {companhia}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{tempo}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              )
            })
          }
        </StyledTabPanels>
      </div>
    </StyledExperienceSection>
  );
}

export default Experience;