import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function About(props) {
  return (
    <>
      <Navbar setProgress={props.setProgress} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TypeStarter | About</title>
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
          About
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer/>

    </>
  )
}
