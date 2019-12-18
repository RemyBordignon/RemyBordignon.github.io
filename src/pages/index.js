import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <p>I'm a full-stack developer based in Sydney</p>
      <p>I recently completed a Bachelor of Computer Science at UNSW
        <span role={'img'} aria-label={'unsw'}>🎓</span>
      </p>
      <p>I currently work at <a href={'https://www.atlassian.com'}>Atlassian</a></p>
    </Layout>
  )
}

export default IndexPage
