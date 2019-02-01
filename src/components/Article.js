import React, { Component } from 'react';
import { Card, Content, Heading } from 'react-bulma-components/full';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'sample',
      updateDate: '2019-2-19',
      description: 'testtesttes',
    };
  }

  render() {
    return (
      <Card className="article">
        <Card.Header>
          <Card.Header.Title>{this.state.title}</Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <Content>
            <Heading subtitle size={3}>{this.state.description}</Heading>
            <br />
            <time>{this.state.updateDate}</time>
          </Content>
        </Card.Content>
      </Card>
    );
  }
}

export default Article;
