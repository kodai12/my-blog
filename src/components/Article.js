import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Content, Heading } from 'react-bulma-components/full';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: 'sample',
      updateDate: '2019-2-19',
      description: 'testtesttes',
    };
  }

  render() {
    return (
      <Link to={`/article/${this.state.id}`}>
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
      </Link>
    );
  }
}

export default Article;
