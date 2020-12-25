import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
import logo from '../assets/images/logo.png';
import comgraphic from '../assets/images/bg-header.jpg';

class HeaderComponent extends Component {
  render() {
    return (
      <div id="header-page">
        <div className="content-head">
          <div className="container">
            <div className="main-logo">
              <h1>
                <Link to="/" target="_blank">
                  <img src={logo} />
                </Link>
              </h1>
              <div className="title-left">
                <h2>{config.mainTitle}</h2>
                <div className="subtitle">{config.subTitle}</div>
                <div className="btn-link-ft">
                  <Link to="/book">{config.btnTitle}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-header-gh">
          <img src={comgraphic} />
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
