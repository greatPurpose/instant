import React, { Component } from 'react';
import config from '../../config';
import comgraphic from '../assets/images/bg-computer.png';
import footerSVG from '../assets/images/footer-svg.png';


class FooterComponent extends Component {
  render() {
    return (
      <div id="footer-page" className="footer-page">
        <div className="container text-center">			
          <div className="mobile-footer-gh"> 
            <img src={comgraphic}/>            
          </div>         
          <h2 className="title-footer">{config.mainTitle}</h2>
          <img className="mobile-footer-cosmetic" src={footerSVG}/>
          <div className="btn-link-ft">            
                <a href="#" target="_blank">{config.btnTitle}</a>
          </div>
          <div className="copyright">
            {config.copyRight} | <a href={config.policyLink} target="_blank">Privacy Policy</a></div>						
        </div>
    	</div>
    );
  }
}

export default FooterComponent;
