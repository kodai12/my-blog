import React from 'react';
import PropTypes from 'prop-types';
import Article from '../components/Article';

const ArticleList = ({ articles }) => (
  <ul>
    {
      articles.map(article => (
        <Article key={article.id} {...article} />
      ))
    }
  </ul>
)

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      text: PropTypes.string.isRequired,
      updateDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default ArticleList;
