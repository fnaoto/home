import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      maxWidth: `300px`,
      margin: `1rem auto`
    }}>
      <Image />
    </div>
    <h1>Iam Naoto, Fukuda.</h1>
  </Layout>
)

export default IndexPage
