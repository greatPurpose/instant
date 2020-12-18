import React, { Component } from 'react';
import '../assets/sass/grayscale.scss';

class Layout extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="wrapper">{children}</div>
        );
    }    
}


export default Layout;