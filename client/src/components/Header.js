import React from 'react';
import {Hero, Container,Heading} from 'react-bulma-components';

function Header(props){
  
    return(
      <Hero color="primary">
      <Hero.Body>
        <Container>
          <Heading>Search For and Save Books of Interest</Heading>
          <Heading subtitle size={3}>
            Using React & Bulma
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
    )
  
}

export default Header;