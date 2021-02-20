import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Jumbo = styled.section`
    background-color: var(--primary);
    color: var(--black);
    min-height: 70vh;
    display: flex;
    align-items: center;
    border: 30px solid;
    border-color: var(--bg);
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
                  {/* Has a beard, drinks IPAs, is sorry */}
                  {/* Works on contingency? No, money down! */}
                  {/* 01110011 01110101 01110000 00100000 01101110 01100101 01110010 01100100 00111111   */}
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
  heading: ``,
}

export default Jumbotron
