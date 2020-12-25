import React, { Component } from 'react';
import config from '../../config';

class FeatureComponent extends Component {
  render() {
    return (
      <div id="main-content" className="main-content">
        <div className="section text-center">
          <div className="container">
            <div className="list-home">
              <h2 id="Theme-Features" className="title-section">
                Features
              </h2>
              <div className="row">
                {config.features.map((conf, idx) => {
                  const { img, ftitle, fcontent } = conf;
                  return (
                    <div className="col-xs-12 col-sm-4 text-center" key={idx}>
                      <div className="wrapper-section wow fadeInUp animated">
                        <div className="img">
                          <img src={img} />
                        </div>
                        <div className="content">
                          <h3>{ftitle}</h3>
                          <p>{fcontent}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureComponent;
