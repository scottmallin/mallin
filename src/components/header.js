import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const SiteHeader = styled.header`
  background-color: #fff;
  position: sticky;
  min-height: 50px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;

  .site-logo {
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: lowercase;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
`

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Container>
      <Link className="site-logo" to="/">Mallin.</Link>
      <Nav>
        <li>Me</li>
        <li>Work</li>
        <li>Contact</li>
      </Nav>
    </Container>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
