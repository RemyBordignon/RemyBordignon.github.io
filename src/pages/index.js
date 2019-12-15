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
      <p>My Hobbies include:</p>
      <ul>
        <li>Basketball <span role={'img'} aria-label={'basketball'}>🏀</span></li>
        <li>Nintendo Switch <span role={'img'} aria-label={'games'}>🎮</span></li>
        <li>Creative Coding <span role={'img'} aria-label={'howdy'}>✨</span></li>
        <li>Running <span role={'img'} aria-label={'running'}>🏃</span></li>
      </ul>
    </Layout>
  )
}

export default IndexPage
