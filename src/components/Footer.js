import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <div id="footer-page" className="footer-page">
        <div className="container text-center">			         
          <h2 className="title-footer">Beautiful Software For Your Cosmetic Clinic</h2>
          <div className="btn-link-ft">            
                <a href="#" target="_blank">BOOK DEMO</a>
          </div>
          <div className="copyright">
            Instant Touch™ brought to you by Instant Consult™ 2018-2020 | <a href="https://instantconsult.s3.amazonaws.com/undefined/Document_2QbQFVdoc7P2xT2.pdf" target="_blank">Privacy Policy</a></div>						
        </div>
    	</div>
    );
  }
}

export default FooterComponent;
