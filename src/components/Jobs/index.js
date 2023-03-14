import fm from 'front-matter';
import { useEffect, useState } from 'react';
import StyledAbaoutSection from "../About/style";

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
          "gitHubRepository": attributes.github,
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
    console.log(mds);
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
    </StyledAbaoutSection>
  );
}

export default Jobs;