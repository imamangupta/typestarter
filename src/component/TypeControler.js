import React from 'react'
import './css/type.css'
import { CaptureScreen } from '../utils/CaptureScreen'

export default function TypeControler() {

    const screenShort = () => {
        CaptureScreen("record", "myimage.png", "image/jpeg");
    }
    document.onkeypress = (e) => {

        let w_active = document.getElementById('w_active');
        let l_active = document.getElementById('l_active');

        if (e.key === l_active?.innerText) {

            if (l_active.nextElementSibling) {
                l_active.nextElementSibling.setAttribute('id', 'l_active');
                l_active.remove();
            }else{
                
                // w_active.nextElementSibling.firstElementChild.setAttribute('id', 'l_active');
                l_active.remove();
                // w_active.nextElementSibling.setAttribute('id', 'w_active');
                // w_active.nextElementSibling.setAttribute('class', 'w_active');
                // w_active.remove();
            }

        }else if(e.key === ' '){
            
            w_active.nextElementSibling.firstElementChild.setAttribute('id', 'l_active');
            
            w_active.nextElementSibling.setAttribute('id', 'w_active');
            w_active.nextElementSibling.setAttribute('class', 'w_active');
            w_active.remove();
        }


    }


    return (
        <>
            <section id='record'>
                <div className='tyc_controler'>
                    <div className='tyc_con'>
                        <div className='tyc_menu_sec'>
                            <span className='tyc_menu' style={{ color: "#0cffff" }}>Default</span>
                            <span className='tyc_menu'>Custom</span>
                        </div>
                        <div className='tyc_divider'></div>
                        <div className='tyc_menu_sec'>
                            <span style={{ color: "#0cffff" }} className='tyc_menu'>Time</span>
                            <span className='tyc_menu'>Words</span>
                        </div>
                        <div className='tyc_divider'></div>
                        <div className='tyc_menu_sec'>
                            <span className='tyc_menu' >15</span>
                            <span className='tyc_menu' >30</span>
                            <span style={{ color: "#0cffff" }} className='tyc_menu' >60</span>
                            <span className='tyc_menu' >120</span>
                        </div>
                    </div>
                </div>






                <div>
                    <div className='tyc_typer_cont'>
                        <div className='tyc_typer'>
                            <span  className='s_active'></span>
                            
                            <div id="w_active" className='w_active'>
                                <letter id='l_active'>t</letter>
                                <letter>h</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>o</letter>
                                <letter>f</letter>
                            </div>
                            <div>
                                <letter>i</letter>
                                <letter>n</letter>
                                <letter>d</letter>
                                <letter>i</letter>
                                <letter>a</letter>
                            </div>
                            <div>
                                <letter>n</letter>
                                <letter>e</letter>
                                <letter>x</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>y</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>r</letter>
                            </div>
                            <div>
                                <letter>w</letter>
                                <letter>o</letter>
                                <letter>r</letter>
                                <letter>l</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>f</letter>
                                <letter>u</letter>
                                <letter>t</letter>
                                <letter>u</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>a</letter>
                                <letter>s</letter>
                                <letter>s</letter>
                            </div>
                            <div>
                                <letter>g</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>o</letter>
                                <letter>u</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>h</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>o</letter>
                                <letter>f</letter>
                            </div>
                            <div>
                                <letter>i</letter>
                                <letter>n</letter>
                                <letter>d</letter>
                                <letter>i</letter>
                                <letter>a</letter>
                            </div>
                            <div>
                                <letter>n</letter>
                                <letter>e</letter>
                                <letter>x</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>y</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>r</letter>
                            </div>
                            <div>
                                <letter>w</letter>
                                <letter>o</letter>
                                <letter>r</letter>
                                <letter>l</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>f</letter>
                                <letter>u</letter>
                                <letter>t</letter>
                                <letter>u</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>a</letter>
                                <letter>s</letter>
                                <letter>s</letter>
                            </div>
                            <div>
                                <letter>g</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>o</letter>
                                <letter>u</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>h</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>o</letter>
                                <letter>f</letter>
                            </div>
                            <div>
                                <letter>i</letter>
                                <letter>n</letter>
                                <letter>d</letter>
                                <letter>i</letter>
                                <letter>a</letter>
                            </div>
                            <div>
                                <letter>n</letter>
                                <letter>e</letter>
                                <letter>x</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>y</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>r</letter>
                            </div>
                            <div>
                                <letter>w</letter>
                                <letter>o</letter>
                                <letter>r</letter>
                                <letter>l</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>f</letter>
                                <letter>u</letter>
                                <letter>t</letter>
                                <letter>u</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>a</letter>
                                <letter>s</letter>
                                <letter>s</letter>
                            </div>
                            <div>
                                <letter>g</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>o</letter>
                                <letter>u</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>h</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>o</letter>
                                <letter>f</letter>
                            </div>
                            <div>
                                <letter>i</letter>
                                <letter>n</letter>
                                <letter>d</letter>
                                <letter>i</letter>
                                <letter>a</letter>
                            </div>
                            <div>
                                <letter>n</letter>
                                <letter>e</letter>
                                <letter>x</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>y</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>r</letter>
                            </div>
                            <div>
                                <letter>w</letter>
                                <letter>o</letter>
                                <letter>r</letter>
                                <letter>l</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>f</letter>
                                <letter>u</letter>
                                <letter>t</letter>
                                <letter>u</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>a</letter>
                                <letter>s</letter>
                                <letter>s</letter>
                            </div>
                            <div>
                                <letter>g</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>o</letter>
                                <letter>u</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>h</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>o</letter>
                                <letter>f</letter>
                            </div>
                            <div>
                                <letter>i</letter>
                                <letter>n</letter>
                                <letter>d</letter>
                                <letter>i</letter>
                                <letter>a</letter>
                            </div>
                            <div>
                                <letter>n</letter>
                                <letter>e</letter>
                                <letter>x</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>y</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>r</letter>
                            </div>
                            <div>
                                <letter>w</letter>
                                <letter>o</letter>
                                <letter>r</letter>
                                <letter>l</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>f</letter>
                                <letter>u</letter>
                                <letter>t</letter>
                                <letter>u</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>a</letter>
                                <letter>s</letter>
                                <letter>s</letter>
                            </div>
                            <div>
                                <letter>g</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>o</letter>
                                <letter>u</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>h</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>o</letter>
                                <letter>f</letter>
                            </div>
                            <div>
                                <letter>i</letter>
                                <letter>n</letter>
                                <letter>d</letter>
                                <letter>i</letter>
                                <letter>a</letter>
                            </div>
                            <div>
                                <letter>n</letter>
                                <letter>e</letter>
                                <letter>x</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>y</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>r</letter>
                            </div>
                            <div>
                                <letter>w</letter>
                                <letter>o</letter>
                                <letter>r</letter>
                                <letter>l</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>f</letter>
                                <letter>u</letter>
                                <letter>t</letter>
                                <letter>u</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>t</letter>
                                <letter>i</letter>
                                <letter>m</letter>
                                <letter>e</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>a</letter>
                                <letter>s</letter>
                                <letter>s</letter>
                            </div>
                            <div>
                                <letter>g</letter>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>t</letter>
                            </div>
                            <div>
                                <letter>c</letter>
                                <letter>l</letter>
                                <letter>o</letter>
                                <letter>u</letter>
                                <letter>d</letter>
                            </div>
                            <div>
                                <letter>r</letter>
                                <letter>e</letter>
                                <letter>a</letter>
                                <letter>d</letter>
                            </div>

                          
                        
                           



                        </div>

                    </div>
                </div>











                <div className='tyc_reload'>
                    <div>
                        <span class="material-symbols-outlined">refresh</span>
                    </div>
                </div>

            </section>


            <section style={{display:'none'}}>
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

                <div>

                    <div className='tyc_res_sec'>
                        <div className='tyc_result'>
                            <span>WPM</span>
                            <span>100</span>
                        </div>
                        <div className='tyc_result_more'>
                            <span>Accuracy</span>
                            <span>90%</span>
                        </div>
                        <div className='tyc_result_more'>
                            <span>Time</span>
                            <span>30s</span>
                        </div>

                        <div className='tyc_result_more'>
                            <span>Word(c)</span>
                            <span>250</span>
                        </div>
                       
                        <div className='tyc_result_more'>
                            <span>Word(w)</span>
                            <span>50</span>
                        </div>
                        <div className='tyc_result_more'>
                            <span>Word(t)</span>
                            <span>300</span>
                        </div>
                        <div className='tyc_result_more'>
                            <span>Setup</span>
                            <span>Default</span>
                        </div>
                        <div className='tyc_result_more'>
                            <span>Lanugage</span>
                            <span>English</span>
                        </div>
                     
                      

                    </div>

                </div>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <button onClick={screenShort}>dwonload img</button>
                    </div>
                    <div>
                        <button onClick={screenShort}>dwonload img</button>
                    </div>
                    <div>
                        <button onClick={screenShort}>dwonload img</button>
                    </div>
                    <div>
                        <button onClick={screenShort}>dwonload img</button>
                    </div>
                    <div>
                        <button onClick={screenShort}>dwonload img</button>
                    </div>
                </div>

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
            </section>
        </>
    )
}
