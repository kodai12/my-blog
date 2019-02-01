import React, { Component } from 'react';
import { Container, Section, Tile } from 'react-bulma-components/full';
import AppHeader from './components/Header.js';
import Article from './components/Article.js';

class App extends Component {
  render() {
    return (
      <div className="my-blog">
        <AppHeader />
        <Section>
          <Container>
            <Tile kind="parent">
              <Tile size={4} renderAs="article" kind="child">
                <Article />
              </Tile>
            </Tile>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
