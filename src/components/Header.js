import React from 'react'
import { Navbar, Hero, Image } from 'react-bulma-components/full'

const AppHeader = () => {
  return (
    <div>
      <Navbar
        color={'light'}
        fixed={'top'}
        active={true}
        transparent={true}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"/>
          </Navbar.Item>
        </Navbar.Brand>
      </Navbar>
      <Hero gradient>
        <Image src="http://placehold.jp/600x200.png" />
      </Hero>
    </div>
  )
}

export default AppHeader
