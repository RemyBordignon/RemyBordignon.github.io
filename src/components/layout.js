import React from 'react'
import Header from "./header"
import '../../node_modules/milligram'

const Layout = (props) => {

  return (
    <div className='container'>
      <Header/>

      {props.children}

    </div>
  )
}

export default Layout
