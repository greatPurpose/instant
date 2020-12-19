import React, {Component} from 'react';
import config from '../../config';

class HeaderComponent extends Component {
    render() {
        return (
            <div id="header-page">
                <div className="content-head">
                    <div className="container">
                        <div className="main-logo">
                            <h1>
                                <a href="#" target="_blank"><img src={require('../assets/images/logo.png')}/></a>
                                
                            </h1>
                            <div className="title-left">
                                <h2>Beautiful Software </h2>
                                <div className="subtitle">FOR YOUR COSMETIC CLINIC</div>
                                <div className="button2"><a href="#">Book Demo</a></div>
                            </div>
                        </div>
                    </div>  			
                </div>
            </div>
        );
    }
}


export default HeaderComponent;