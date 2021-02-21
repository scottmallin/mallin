import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import FeatureText from "../components/featureText"
import Projects from "../components/projects"
import Project from "../components/project"

import placeholderVid from '../images/placeholder.mp4'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron
      heading="Front-end dev"
      subheading="maybe a little too into radiohead"
    />
    <FeatureText>
      <h2>
        Some of my favourite projects
      </h2>
    </FeatureText>
    <Projects>
      <Project video={placeholderVid} name="Frank Grimes & The Disasters"></Project>
      <Project video={placeholderVid} name="Dozytattoo"></Project>
      <Project video={placeholderVid} name="Pokedex"></Project>
      <Project></Project>
    </Projects>
    <FeatureText icon="beer">
      <h2>
        Howdy, I'm Scott. I'm a front-end developer in Yorkshire, UK.
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus ullam esse modi optio consectetur quae dignissimos commodi hic distinctio.</p>
    </FeatureText>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
