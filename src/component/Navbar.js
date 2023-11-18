import React from 'react'
import './css/navbar.css'
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {

  const location = useLocation();
  const clickpro = () => {
    props.setProgress(100);
  }

  return (
    <>
      <section>
        <div className='header-inner'>
          <div className='logo'>
            
            <span class="material-symbols-outlined logo_keyboard">keyboard</span>
            <span style={{ marginLeft: '5px' }}>TypeStarter</span>
          </div>
          <div className='header_link'>

            <Link onClick={clickpro} to="/" style={{ textDecoration: 'none', color: '#0dffff' }}>
              <div  className={`${location.pathname === '/' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">home</span>
              </div>
            </Link>

            <Link onClick={clickpro} to="/type" style={{ textDecoration: 'none', color: '#0dffff' }}>
              <div className={`${location.pathname === '/type' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">keyboard</span>
              </div>
            </Link>

            <Link onClick={clickpro} to="/game" style={{ textDecoration: 'none', color: '#0dffff' }}>
            <div className={`${location.pathname === '/game' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">stadia_controller</span>
              </div>
            </Link>

            <Link onClick={clickpro} to="/about" style={{ textDecoration: 'none', color: '#0dffff' }}>
            <div className={`${location.pathname === '/about' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">info</span>
              </div>
            </Link>

            <Link onClick={clickpro} to="/competition" style={{ textDecoration: 'none', color: '#0dffff' }}>
            <div className={`${location.pathname === '/competition' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">rewarded_ads</span>
              </div>
            </Link>

            <Link onClick={clickpro} to="/setting" style={{ textDecoration: 'none', color: '#0dffff' }}>
            <div className={`${location.pathname === '/setting' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">settings</span>
              </div>
            </Link>


            <Link onClick={clickpro} to="/chat" style={{ textDecoration: 'none', color: '#0dffff' }}>
            <div className={`${location.pathname === '/chat' ? 'h_link_active' : 'h_link'}`}>
                <span class="material-symbols-outlined">chat</span>
              </div>
            </Link>


            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
              <Link onClick={clickpro} to="/login" style={{ textDecoration: 'none' }}>
                <div className='btn_setup'>
                  <svg className='cls-1' width={96}  id="eFZJgmCx5Ib1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 15" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <g transform="translate(-135-45)">
                      <rect width="40" height="15" rx="2" ry="2" class="cls-1" transform="translate(135 45)" fill="#00000017" stroke-width="0" />
                    </g>
                  </svg>
                  <div className='btn_login'>
                    <span>Login</span>
                    <span class="material-symbols-outlined">login</span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

      </section>



    </>
  )
}
