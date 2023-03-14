import fm from 'front-matter';
import { useEffect, useState } from 'react';
import StyledAbaoutSection, {
  StyledProjectGrid,
  StyledProject
} from "../Jobs/styles";

import githubIcon from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
const Jobs = () => {
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
          "date": attributes.date,
          "title": attributes.title,
          "image": attributes.cover,
          "github": attributes.github,
          "url": attributes.externar,
          "tech": attributes.tech
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
    const mds = importAll(require.context('../../content/featured/', true, /\.\/[^/]+\/index\.md$/));
    await createContent(mds);
    return;
  }

  useEffect(() => {
    importFilesMd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledAbaoutSection id="trabalhos">
      {console.log(content)}
      <h2 className="numbered-heading">Some Things I've Built</h2>

      <StyledProjectGrid>
        {
          content && 
          content.map(
            (node , index) => {
              const { frontmatter, html } = node;
              const { date, title, url, github, image, tech, external } = frontmatter;
              
              return (
                <StyledProject>
                  <div className='project-contet'>
                    <div>
                      <p className='project-overline'>Featured Project</p>
                      
                      <h3 className='project-title'>
                        <a href={external}>{title}</a>
                      </h3>

                      <div className='project-description' dangerouslySetInnerHTML={{ __html: html}} />

                      {tech.length && (
                        <ul className='project-tech-list'>
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      )}

                      <div className='project-links'>
                        {github && (
                          <a href={github} arial-label='Github Link'>
                            <img src={githubIcon} alt="Light github icon" />
                          </a>
                        )}
                        {external && (
                        <a href={external} aria-label="External Link" className="external">
                          <img src={githubDark} alt="Dark github icon"/>
                        </a>
                      )}
                      </div>
                    </div>
                  </div>
                  <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <img image={image} alt={title} className="img" />
                  </a>
                </div>
                </StyledProject>
              )
            }
          )
        }
        <StyledProject>

        </StyledProject>
      </StyledProjectGrid>
    </StyledAbaoutSection>
  );
}

export default Jobs;