import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopPage from './pages/Top.js'
import ArticlePage from './pages/Article.js'
import NotFoundPage from './pages/NotFound.js'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route path="/article/:id" component={ArticlePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
