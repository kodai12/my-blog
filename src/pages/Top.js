import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Section } from 'react-bulma-components/full'
import AppHeader from '../components/Header.js'
import VisibleArticleList from '../containers/VisibleArticleList.js'
import AddArticle from '../containers/AddArticle.js'

const TopPage = () => {
  return (
    <div className="my-blog">
      <AppHeader />
      <Section>
        <Container>
          <VisibleArticleList />
          <AddArticle />
        </Container>
      </Section>
    </div>
  )
}

export default TopPage
