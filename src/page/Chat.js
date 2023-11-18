import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from '../component/Navbar';

export default function Chat(props) {
  return (
    <>
    <Navbar setProgress={props.setProgress} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TypeStarter | Chat</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          Chat
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}
