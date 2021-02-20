import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const SiteHeader = styled.header`
  @supports (backdrop-filter: saturate(180%) blur(20px)) {
    backdrop-filter: saturate(180%) blur(20px)
  };

  background-color: rgba(var(--bg-rgb), 0.9);
  position: sticky;
  min-height: 80px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;

  .site-logo {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: lowercase;
    color: var(--text);
    display: flex;
    align-items: center;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6667rem;
  width: 100%;
`

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;

  li {
    text-transform: lowercase;

    a {
      color: var(--text);
      text-decoration: none;
    }

    + li {
      margin-left: 15px;
    }
  }
`

const Header = () => (
  <SiteHeader>
    <Container>
      <Link className="site-logo" to="/">Mallin.</Link>
      <Nav>
        <li><a href="#">Work</a></li>
        <li><a href="#">Me</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
                <svg width="32" xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Flashlight</title><path d='M456.64 162.86L349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52 24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><circle cx='224.68' cy='287.28' r='20'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M289 81l142 142'/></svg>
              </label>
            )}
          </ThemeToggler>
        </li>
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
