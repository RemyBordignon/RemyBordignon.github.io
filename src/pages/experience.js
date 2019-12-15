import React from "react"
import Layout from "../components/layout"

const Experience = () => {
  return (
    <Layout>
      <h3>Graduate Developer</h3>
      <h6><a href={'https://www.atlassian.com'} >Atlassian</a> - 2020</h6>

      <h3>Intern Developer</h3>
      <h6><a href={'https://www.atlassian.com'} >Atlassian</a> - 2018-2019</h6>
      <p>Interned as a Software Engineer on an incident management product team.</p>
      <ul>
        <li>
          Series of front-end features delivered in React-Redux.
        </li>
        <li>
          Feature work in Java monolith and Kotlin micro-service
        </li>
        <li>
          Exposed to company best practices - storybook component testing, product
          incident reports, feature flagging, retros, devOps.
        </li>

      </ul>
      <h3>Software Engineering Intern</h3>
      <h6><a href={'https://www.commbank.com.au/'} >CommBank</a> - 2017-2018</h6>
      <p>Interned as a Software Engineer working on a mobile and online insurance product.</p>
      <ul>
        <li>Developed end-to-end browser test automation using Selenium WebDriver,
        contributing to suite of regression tests.
        </li>
        <li>
          Contributed to team’s goal of continous integration by stubbing downstream dependencies in mountebank to decouple testing from test environment.
        </li>
        <li>
          Used FiddlerCore to implement a webanalytics verification project, to intercept
          and verify that analytics tags are fired, reducing load on manual testers.
        </li>
      </ul>

    </Layout>
  )
}

export default Experience
