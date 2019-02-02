import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Content, Heading } from 'react-bulma-components/full';

const Article = ({ id, title, text, updateDate }) => (
  <Link to={`/article/${id}`}>
    <Card className="article">
      <Card.Header>
        <Card.Header.Title>{title}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Content>
          <Heading subtitle size={3}>{text}</Heading>
          <br />
          <time>{updateDate}</time>
        </Content>
      </Card.Content>
    </Card>
  </Link>
)

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  updateDate: PropTypes.string.isRequired
}

export default Article;
