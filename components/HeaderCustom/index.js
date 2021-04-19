// == Import npm
import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
} from 'semantic-ui-react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { createMedia } from '@artsy/fresnel';

import './Header.module.scss';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
  },
  // == Import
});

const HeaderCustom = () => {
  const router = useRouter();

  const activeItem = router.asPath

  console.log(activeItem);

  return (
    <Segment style={{ border: 0, boxShadow: 'none' }}>
      <Container>
        <Menu pointing secondary>
          <MediaContextProvider>
            <Media lessThan="tablet">
              <Button basic icon="bars" compact />
            </Media>
          </MediaContextProvider>

          <MediaContextProvider>
            <Media greaterThanOrEqual="tablet">
              <Menu.Menu position="right">
                <Link href="/">
                  <Menu.Item
                    name="accueil"
                    active={activeItem === '/accueil' || activeItem === '/'}
                  />
                </Link>
                <Link href="/projets">
                  <Menu.Item
                    name="projets"
                    active={activeItem === '/projets'}
                  />
                </Link>
                <Link href="/apropos">
                  <Menu.Item
                    name="A propos"
                    active={activeItem === '/apropos'}
                  />
                </Link>
                <a href="/cv_BenjaminSabardu_devFront.pdf" download>
                  <Menu.Item size="mini">
                    <Button compact size="mini" secondary content="CV" only="mobile" />
                  </Menu.Item>
                </a>
              </Menu.Menu>
            </Media>
          </MediaContextProvider>
        </Menu>
      </Container>
    </Segment>
  );
}

export default HeaderCustom;
