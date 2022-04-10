import { useEffect, useState } from 'react';
import StyledExperienceSection, {
  StyledButton,
  StyledHighlight, StyledTabList, StyledTabPanels
} from './styles';
import fm from 'front-matter';

const Experience = () => {
  const listaDeExperiencia = ['Upstatement', 'iFood', 'Cubos', 'Pixar', 'Lexar'];
  const [activeTabId, setActiveTabId] = useState(0);
  const [content, setContent] = useState({ md: "" });

  function importAll(r) {
    return r.keys().map(r);
  }

  const mds = importAll(require.context('../../content/jobs/', true, /\.\/[^/]+\/index\.md$/));

  useEffect(() => {
    mds.forEach(obj => {
      fetch(obj.default).then(res => res.text()).then(md => {
        setContent(md);
        console.log(fm(md).frontmatter);
      });
    });
  }, []);

  // useEffect(() => {
  //   console.log(mds);
  // }, [activeTabId]);

  // const data = useStaticQuery(graphql`
  //   query {
  //     jobs: allMarkdownRemark(
  //       filter: { fileAbsolutePath: { regex: "/jobs/" } }
  //       sort: { fields: [frontmatter__data], order: DESC }
  //     ) {
  //       edges {
  //         nodes {
  //           frontmatter {
  //             titulo
  //             companhia
  //             local
  //             tempo
  //             url
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);

  // const jobsData = data.jobs.edges;

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
                    key={index}
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
        <StyledTabPanels>
          {/* {jobsData &&
            jobsData.map(({ node }, index) => {
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
          } */}
        </StyledTabPanels>
      </div>
    </StyledExperienceSection>
  );
}

export default Experience;