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
  z-index: 10;

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

      svg {
        fill: var(--text);
      }
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
          <a href="https://github.com/scottmallin" target="_blank" rel="noopener noreferrer">
            <svg width="32" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Github</title><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
          </a>
        </li>
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
