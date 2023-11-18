import React from 'react'
import '../component/css/login.css'
import { Helmet } from "react-helmet";
import Navbar from '../component/Navbar';


export default function Login(props) {
    return (
        <>
            <Navbar setProgress={props.setProgress} />

            <Helmet>
                <meta charSet="utf-8" />
                <title>TypeStarter | Login</title>
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
                    Login
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>



        </>
    )
}
