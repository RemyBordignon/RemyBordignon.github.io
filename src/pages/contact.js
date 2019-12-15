import React from "react"
import Layout from "../components/layout"


const Contact = () => {
  const email = "remybordignon8@gmail.com"
  return (
    <Layout>
      <p>Let's get in touch <span role={'img'} aria-label={'hey'}>😀</span></p>
      <pre>
        <code>
         {email}
        </code>
      </pre>
      <p><a href={"https://www.linkedin.com/in/remybordignon"}>LinkedIn</a></p>
    </Layout>
  )
}

export default Contact
