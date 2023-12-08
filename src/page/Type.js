import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from '../component/Navbar';
import TypeControler from '../component/TypeControler';

export default function Type(props) {


  return (
    <>
      <Navbar setProgress={props.setProgress} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TypeStarter | Type</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        <br />
        <br />
        <br />
        <br />
      </div>

     <TypeControler/>
    </>
  )
}
