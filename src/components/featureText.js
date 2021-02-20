// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

import downArrow from '../images/arrow-down-outline.svg'

const Section = styled.section`
    background-color: var(--bg);
    color: var(--text);
    display: flex;
    align-items: center;
    padding: 100px 0;

    .col {
      display: flex;
      justify-content: space-between;
    }
`

const FeatureText = (props) => (
  <Section>
      <div className="container">
          <div className="row">
              <div className="col">
                {props.children}
                <svg width="24" height="24" xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100'/></svg>
              </div>
          </div>
      </div>
  </Section>
)

export default FeatureText
