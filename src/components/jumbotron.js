import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Jumbo = styled.section`
    background-color: #fff;
    min-height: 70vh;
    display: flex;
    align-items: center;
`

const Jumbotron = ({ heading }) => (
  <Jumbo>
      <div className="container">
          <div className="row">
              <div className="col">
                  <h1>{heading}</h1>
              </div>
          </div>
      </div>
  </Jumbo>
)

Jumbotron.propTypes = {
  heading: PropTypes.string,
}

Jumbotron.defaultProps = {
  heading: ``,
}

export default Jumbotron
