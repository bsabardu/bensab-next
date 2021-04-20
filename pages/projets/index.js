// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import { Container, Header, Card, Divider } from 'semantic-ui-react';

// == Import local componetns
import HeaderCustom from 'components/HeaderCustom';
import Footer from 'components/Footer';
import ButtonMailto from 'components/ButtonMailto';
import Project from 'components/Project';

// Import Projets data
import projectsData from 'data/projects';

// Import images

// == Composant
const Projects = () => (
  <>
  <HeaderCustom />
  <Container>
    <Header as="h1" textAlign="center">Mes projets</Header>
    <Divider hidden />
    <Card.Group itemsPerRow={3} stackable doubling>
      {projectsData.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Card.Group>
    <Divider hidden />
    <Container textAlign="center">
      <Header as="h3" content="Et bientôt le votre ?..." />
      <ButtonMailto primary size="big" content="Contactez-moi" mailto="mailto:bsabardu@gmail.com" />


    </Container>
  </Container>
  <Footer />
</>
);

// On déclare le type de props attendu
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

Projects.defaultProps = {
  projects: [{ name: 'Un project' }],
};

// == Export
export default Projects;
