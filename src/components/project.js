// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Container = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
        height: 125%;
    }
`

const Project = (props) => (
  <Container>
    { props.video != null ? <video autoPlay muted loop><source src={props.video} /></video> : 'no video' }
  </Container>
);

export default Project
