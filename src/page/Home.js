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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width={'96%'} id="eTX5i2mFegf1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 430 152" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <path d="M15.16035,14.18211h285.06044L150.83588,163.56702h-136.621l.94547-149.38491Z" transform="translate(-12.351447-13.499231)" fill='#00000057'  stroke-width="0.696" />
            <path d="M15.160364,14.18211h285.064516L150.837834,163.56702h-136.622954l.945484-149.38491Z" transform="matrix(-1 0 0-1 443.130023 164.319796)"  fill='#00000026' stroke="#0dffff" stroke-width="0.696" />
          </svg>
        </div>
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

      <Footer />
    </>
  )
}
