import Head from 'next/head'

// == Import npm
import React from 'react';

// == Import semantic 
import { Button, Container, Divider } from 'semantic-ui-react';

import Link from 'next/link';
import Avatar from 'avataaars';

// == Import
import './Home.module.scss';


// == Import Components
import HeaderCustom from 'components/HeaderCustom';
import Footer from 'components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <HeaderCustom />
      <div className="home" style={{ minHeight: 'calc( 100vh - 92px - 75px' }}>
        <Container className="title__wrapper" fluid textAlign="center">
          <h1 className="home__title">Benjamin Sabardu, Développeur Frontend</h1>
          <h2 className="home__subtitle">Je réalise des projets tech. Et j'aime ça. </h2>
          <Avatar
            avatarStyle="Circle"
            topType="ShortHairShortFlat"
            accessoriesType="Round"
            hairColor="BrownDark"
            facialHairType="BeardLight"
            facialHairColor="BrownDark"
            clotheType="ShirtCrewNeck"
            clotheColor="Blue03"
            eyeType="Happy"
            eyebrowType="RaisedExcitedNatural"
            mouthType="Smile"
            skinColor="Light"
          />
        </Container>
        <Container text textAlign="center">
          <Divider />
          <h3 className="home__intro"> Bonjour ! Je suis Benjamin, enchanté</h3>
          <p className="home__content">
            Je suis arrivé dans la tech dans un premier temps par des postes commerciaux / gestion de projets / product management. Mais passionné par les challenges techniques et souhaitant pour agir concrètement sur la réalisation de produits, je me suis récemment orienté vers le développement front-end. <br />
        En près de 10 ans, j'ai travaillé en ESN, Agence web, Pureplayer e-commerce, Editeur SaaS, Startup... <br />
        Mon parcours prouve ma capacité d'adaptation, ma polyvalence et ma capacité d'analyse. <br />
        Sinon j'aime faire du sport (principalement vélo et course à pied), du théatre (impro) et des blagues.
      </p>
          <Link href="/projets"><Button primary content="Voir mes projets" /></Link>
          <Button grey content="Contact" />
        </Container>
      </div>
      <Footer />
    </div >
);

// == Export
export default App;
