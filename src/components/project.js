// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const Container = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    video {
        height: 125%;
    }

`

const Name = styled.span`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
    padding: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
`

const Project = (props) => (
  <Container>
    { props.video != null ? <video autoPlay muted loop><source src={props.video} /></video> : 'no video' }
    <Name>{ props.name }</Name>
  </Container>
);

export default Project
