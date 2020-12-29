import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/sass/grayscale.scss';
import config from '../../config';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
    <div className="wrapper">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="keywords" content={config.seo_content}/>
        <meta name="og:site_name" content={config.siteTitle}/>
        <meta name="og:title" content={config.siteTitle}/>
        <meta name="og:type" content="website"/>
        <meta name="og:site_name" content={config.manifestName}/>
        <meta property="og:description" content={config.seo_description} />  
        <meta property="description" content={config.seo_description} />        
      </Helmet>
      {children}
      </div>);
  }
}

export default Layout;
