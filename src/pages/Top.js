import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section, Tile } from 'react-bulma-components/full';
import AppHeader from '../components/Header.js';
import VisibleArticleList from '../containers/VisibleArticleList.js';
import AddArticle from '../containers/AddArticle.js';

class TopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      title: 'test title',
      subTitle: 'test sub title',
      text: 'testtesttest',
      updateDate: '2019-2-21',
    }
  }
  render() {
    return (
      <div className="my-blog">
        <AppHeader />
        <Section>
          <Container>
            <Link to={`/article/${this.state.id}`}>
              <VisibleArticleList />
            </Link>
            <AddArticle />
          </Container>
        </Section>
      </div>
    );
  }
}

export default TopPage;
