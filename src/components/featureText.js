// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Section = styled.section`
    background-color: var(--bg);
    color: var(--text);
    display: flex;
    align-items: center;
    padding: 100px 0;

    .col {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h2 + p {
        padding-top: 30px;
      }

      svg {
        margin-left: 30px;
      }
    }
`

const FeatureText = (props) => (
  <Section>
      <div className="container">
          <div className="row">
              <div className="col">
                <div>
                  {props.children}
                </div>
                { props.icon == 'beer' ? 
                  <svg width="24" height="24" xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Beer</title><path d='M352 200v240a40.12 40.12 0 01-40 40H136a40.12 40.12 0 01-40-40V224' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M352 224h40a56.16 56.16 0 0156 56v80a56.16 56.16 0 01-56 56h-40' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M224 256v160M288 256v160M160 256v160M320 112a48 48 0 010 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 010-96 47.91 47.91 0 0126 9'/><path d='M91.86 132.43a40 40 0 1160.46-52S160 91 160 96M145.83 64.71C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 01-1.67 17.79' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/></svg>:
                  <svg width="24" height="24" xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100'/></svg>
                }
              </div>
          </div>
      </div>
  </Section>
)

export default FeatureText
