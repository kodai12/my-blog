import React from 'react'
import { Container, Section, Box, Heading, Content } from 'react-bulma-components/full'
import AppHeader from '../components/Header.js'

const ArticlePage = article => {
  return (
    <div className="article">
      <AppHeader />
      <Section>
        <Container>
          <Box>
            <Heading>{article.title}</Heading>
          </Box>
          <Content>
            <Heading size={5}>
              {article.subTitle}
            </Heading>
            <date>{article.updateDate}</date>
            <p>
              {article.text}
            </p>
          </Content>
        </Container>
      </Section>
    </div>
  )
}

export default ArticlePage
