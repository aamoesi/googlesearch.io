import React from 'react';
import {Button,Field,Control,Label,Input,Hero,Heading,Container} from 'react-bulma-components/full';

function Search (props){
    return (
      <React.Fragment>
         <Hero color="primary">
            <Hero.Body>
              <Container>
                <Heading>Search For and Save Books of Interest</Heading>
                <Heading subtitle size={3}>
                  Using React & Bulma
                </Heading>
                <form onSubmit={props.handleSubmit}>
                  <input className="input" type="text" placeholder="Enter Book Name .." name="bookInput" onChange={props.handleInput}/>
                  <Button onClick={props.handleSubmit}  color="warning"><strong>Search</strong></Button>
                </form>
              </Container>
            </Hero.Body>
          </Hero>
       </React.Fragment>
    )
}

export default Search;