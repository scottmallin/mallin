// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Section = styled.section`
    background-color: var(--secondary);
    color: var(--tertiary);
    display: flex;
    align-items: center;
    padding: 100px 0;
`

const FeatureText = (props) => (
  <Section>
      <div className="container">
          <div className="row">
              <div className="col">
                {props.children}
              </div>
          </div>
      </div>
  </Section>
)

export default FeatureText
