import React from 'react'
import '../component/css/footer.css'

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <section className='footer_sec'>
        <div className='footer_inner'>
          <div>
            <div>
              <h3>Typestarter</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <a href="">Currur</a><br />
                <a href="">Group</a><br />
                <a href="">Help</a><br />
              </div>
              <div>
                <a href="">Support</a><br />
                <a href="">feedback</a><br />
                <a href="">Member</a><br />
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
            </div>

          </div>

          <div style={{width:'50%'}}>
            <p style={{ fontSize: '15px' }}>Get Fresh new Typestarter news</p>
            <div>
              <div className='newletter_btn'>
                <input type="text" />
                <button>Subscribe</button>
              </div>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{fontSize:'13px'}} htmlFor="" >By checking the box, you are that you are at least 16 years of age.</label>
            </div>

          </div>

        </div>
        <div className='footer_copyright'>
          <div>
            <a style={{ paddingLeft: '0px' }} className='f_l_l' href="">Website Terms</a>|<a className='f_l_l' href="">private policy</a>|<a className='f_l_l' href="">Accessibily</a>|<a className='f_l_l' href="">site map</a>|<a className='f_l_l' href="">Suppiere code of conduct</a>|<a className='f_l_l' href="">Website Terms</a>|<a className='f_l_l' href="">Website Terms</a>|<a className='f_l_l' href="">Website Terms</a>|<a className='f_l_l' href="">Website Terms</a>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '12px' }}>&copy; 2023 Typestarter, LLC. All Right Reserved.</p>
          </div>
        </div>
      </section>
    </>
  )
}
