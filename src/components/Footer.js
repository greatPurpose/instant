import React, { Component } from 'react';
import { Link } from 'gatsby';
import config from '../../config';
import comgraphic from '../assets/images/bg-computer.png';
import footerPNG from '../assets/images/footer-svg.png';

class FooterComponent extends Component {
  render() {
    return (
      <div id="footer-page" className="footer-page">
        <div className="container text-center">
          <div className="mobile-footer-gh">
            <img src={comgraphic} />
          </div>
          <h2 className="title-footer">{config.mainTitle}</h2>
          <img className="mobile-footer-cosmetic" src={footerPNG} />
          <div className="btn-link-ft">
            <Link to="/book">{config.btnTitle}</Link>
          </div>
          <div className="copyright">
            {config.copyRight} |{' '}
            <a href={config.policyLink} target="_blank">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
