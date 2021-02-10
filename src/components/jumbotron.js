// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Jumbo = styled.section`
    background-color: var(--primary);
    color: var(--tertiary);
    min-height: 70vh;
    display: flex;
    align-items: center;
    border: 30px solid var(--secondary);
    border-top: none;
    border-bottom: none;
`

const Jumbotron = ({ heading, subheading }) => (
  <Jumbo>
      <div className="container">
          <div className="row">
              <div className="col">
                  <h1>{heading}</h1>
                  { subheading ? <p>{subheading}</p> : '' }
              </div>
          </div>
      </div>
  </Jumbo>
)

Jumbotron.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string
}

Jumbotron.defaultProps = {
  heading: ``
}

export default Jumbotron
