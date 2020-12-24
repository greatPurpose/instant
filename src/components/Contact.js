import React, {Component} from 'react';
import config from '../../config';
import {Link, navigate} from 'gatsby';
import logo from '../assets/images/logo.png';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class ContactComponent extends Component {
    constructor (props) {
        super(props);

        this.state = {
          name:"",
          contactnum: "",
          email: "",
          info:"",
          errors: []
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
      hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
      }

      hasErrors() {
          return this.state.errors.length > 0 ?  true: false;
      }

    handleInputChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        var obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    handleSubmit(event) {
        event.preventDefault();
        let errors = [];
        //name
        if (this.state.name === "") {
            errors.push("name");
        }

        //contact number
        const phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
        if (!this.state.contactnum.match(phoneno)) {
            errors.push("contactnum");
        }

        //email
        const expression = /\S+@\S+/;
        let validEmail = expression.test(String(this.state.email).toLowerCase());
        if (!validEmail) {
            errors.push("email");
        }

        this.setState({ errors: errors });
       
        if (errors.length > 0) {
        return false;
        } else {
        fetch("http://localhost:3000/book", {                
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            mode: 'no-cors',
            body: encode({ "form-name": "book-demo", "from":"test1", "to": "test2", "message": 'message2' })
        })
        .then(() => { console.log('booking demo'); navigate("/")  } )
        .catch(error => {console.log('booking fail');  navigate("/") });
        }
    }

    render(){
        return(
            <div className="contact-main">
                <h1>
                    <Link to="/" target="_blank"><img src={logo} /></Link>
                </h1>
                <form action="/" method="post" name="contact-form"  >
                    <div className="contact-us-form">
                        <div className="title">{config.btnTitle}</div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 form-required">
                                <span className="form-control-wrap Name" >
                                    <input type="text" name="name" size="40" className={this.hasError("name")? "wpcf7-text is-invalid": "wpcf7-text"} placeholder="Name*" value={this.state.name} onChange={this.handleInputChange} />
                                    <div className={this.hasError("name")? "inline-errormsg": "hidden"}>The field is required</div>
                                </span>
                            </div>
                            <div className="col-sm-12 col-md-4 form-required">
                                <span className="form-control-wrap Address">
                                    <input type="text" name="contactnum" size="40" className={this.hasError("contactnum")? "wpcf7-text is-invalid": "wpcf7-text"} value={this.state.contactnum} onChange={this.handleInputChange} placeholder="Contact Number*"/>
                                    <div className={this.hasError("contactnum")? "inline-errormsg": "hidden"}>Please enter a valid phone number</div>
                                </span>
                            </div>
                            <div className="col-sm-12 col-md-4 form-required"> 
                                <span className="form-control-wrap Email">
                                    <input type="email" name="email" size="40" className={this.hasError("email")? "wpcf7-text is-invalid": "wpcf7-text"} value={this.state.email} onChange={this.handleInputChange} placeholder="Email*" />
                                    <div className={this.hasError("email")? "inline-errormsg": "hidden"}>Please enter a valid email address</div>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12"> 
                                <span className="form-control-wrap textarea-982">
                                    <textarea name="info" cols="40" rows="10" className="wpcf7-textarea" value={this.state.info} onChange={this.handleInputChange} placeholder="Additional Information"></textarea>
                                </span>
                            </div>
                        </div>
                        <div className="button"> 
                            <input type="submit" value="Submit" className="wpcf7-submit" onClick={this.handleSubmit} />
                        </div>
                        <div className={this.hasErrors()? "wpcf7-response-output": "hidden"} >One or more fields have an error. Please check and try again.</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactComponent;