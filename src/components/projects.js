// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Section = styled.section`
    background-color: var(--bg);
    color: var(--text);
    display: flex;
    align-items: center;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 30px;
    grid-template-areas:
        "vert hori hori"
        "vert mini-1 mini-2";

    div {
        max-height: 413px;

        &:first-child {
            grid-area: vert;
            max-height: none;
        }
    
        &:nth-child(2) {
            grid-area: hori;
        }
    
        &:nth-child(3) {
            grid-area: mini-1;
        }
    
        &:last-child {
            grid-area: mini-2;

            &:after {
                content: '';
                display: block;
                padding-bottom: 100%;
            }
        }
    }
`

const Projects = (props) => (
  <Section>
      <div className="container">
          <div className="row">
              <div className="col">
                  <Grid>
                    {props.children}
                  </Grid>
              </div>
          </div>
      </div>
  </Section>
)

export default Projects
