import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function Home(props) {
  return (
    <>
      <Navbar setProgress={props.setProgress} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TypeStarter</title>
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
          Home
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <section>
        <div>
          <Link to="/Type">type</Link>
        </div>
      </section>

      <Footer/>
    </>
  )
}
