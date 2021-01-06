import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="header_home">
            <div className="hubba_logo"></div>
            <span className="text_desc1 pop_font">We create brands with<br /> purpose, brands the <br /> world falls in love with</span>
            <div className="hubba_menu"></div>
            <div className="talk_button" />
            <span className="text_desc4 pop_font">how we do it</span>
            <div className="img_cont1" />
            <div className="img_cont2" />
            <div className="img_cont3" />
            <div className="img_cont4" />
            <span className="text_cont1 pop_font">Strategy</span>
            <span className="text_cont2 pop_font">development</span>
            <span className="text_cont3 pop_font">content</span>
            <span className="text_cont4 pop_font">design</span>
            <span className="text_cont5 bra_font">Research <br /> UX/UI consulting</span>
            <span className="text_cont6 bra_font">Html/CSS <br /> JS <br /> React</span>
            <span className="text_cont7 bra_font">Copywriting Video/Photography Animation</span>
            <span className="text_cont8 bra_font">UI/UX Design Brand identity Visual design </span>
            <div className="mail_img" />
            <span className="text_desc5 pop_font">work</span>            
            <div className="brand_cont1">
                <div className="cont_font1" />
                <div className="cont_img1" />
                <div className="view_proe" />
                <span className="cont_des1 bra_font">Branding &amp; Web design</span>
                <span className="cont_des2 pop_font">eats</span>
            </div>
            <div className="brand_cont2">
                <div className="cont_font2" />
                <div className="view_pros" />
                <span className="cont_img2" />
                <span className="cont_des3 bra_font">Branding &amp; Web design</span>
                <span className="cont_des4 pop_font">Eleven+ <br /> studio</span>      
            </div>
            <div className="home_img" />
            <span className="text_desc2 pop_font">Let’s talk about you</span>
            <span className="text_desc3 bra_font">Get in touch</span>            
            <div className="foot_cont1">
                <div className="foot_font1" />
                <span className="foot_text1 pop_font">Hubba Hubba <br /> Sunshine coast - Australia</span>
                <span className="foot_text2 pop_font">about</span>
                <span className="foot_text3 pop_font">FOLLOW US</span>
                <div className="soc_font">
                    <div className="soc_cont">
                        <div className="soc_ins">
                        </div>
                        <div className="soc_lin">
                        </div>
                        <div className="soc_ball" />
                        <div className="soc_be">
                        </div>
                    </div>
                </div>
                <span className="foot_text4 bra_font">Hubba Hubba Branding ©2020 </span>
                <span className="foot_text5 pop_font">work</span>
                <span className="foot_text6 pop_font">insights</span>
                <span className="foot_text7 pop_font">CONTACT US</span>
                <span className="foot_text8 pop_font"><b>A.</b> 20 Arwen st Maroochydore, <br /> Sunshine coast - QLD 4558 / Australia <br /><br /> <b>T.</b> +61405598018 <br /><br /> <b>E.</b> info@hhbranding.com</span>
                <div className="log_foot">
                </div>
            </div>
        </div>
    );
}

export default Home;

// DOM element
if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}