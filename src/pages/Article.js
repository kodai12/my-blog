import React, { Component } from 'react';
import { Container, Section, Box, Heading, Content } from 'react-bulma-components/full';
import AppHeader from '../components/Header.js';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="article">
        <AppHeader />
        <Section>
          <Container>
            <Box>
              <Heading>{this.props.title}</Heading>
            </Box>
            <Content>
              <Heading size={5}>
                {this.props.subTitle}
              </Heading>
              <date>{this.props.updateDate}</date>
              <p>
                {this.props.text}
              </p>
            </Content>
          </Container>
        </Section>
      </div>
    );
  }
}

export default ArticlePage;
