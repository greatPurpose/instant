import React, {Component} from 'react';
import config from '../../config';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      fontFamily            : 'Muli,sans-serif',  
      backgroundColor       : '#fff',
      maxWidth: '350px',
      width: '100%'
    },
    overlay: {
        backgroundColor: 'rgba(36, 36, 36, 0.6)'
    }
  };

class BookingComponent extends Component { 
    constructor () {
        super();
        this.state = {
          showModal: false,
          name:"",
          contactNum: "",
          email: "",
          info:"",
          errors: []
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

      hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
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
        const phoneno = /^[0-9\b]+$/;
        if (!this.state.contactNum.match(phoneno)) {
            errors.push("contactNum");
        }

        //email
        const expression = /\S+@\S+/;
        let validEmail = expression.test(String(this.state.email).toLowerCase());
        if (!validEmail) {
            errors.push("email");
        }

        this.setState({
            errors: errors
          });
       
          if (errors.length > 0) {
            return false;
          } else {
            alert("everything good. submit form!");
          }

    }

    render() {
        return ( 
        <div className="btn-link-ft">
            <button onClick={()=>{this.handleOpenModal()}}>{config.btnTitle}</button>
            <Modal
            style={customStyles}
                isOpen={this.state.showModal}
                >
             <form name="contact-form" className="book-modal" method="post" netlify> 
                <h3>{config.btnTitle}</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className={this.hasError("name")? "form-control is-invalid": "form-control"} name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name"/>
                    <div className={this.hasError("name")? "inline-errormsg": "hidden"}>Please enter a value</div>
                </div>

                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text" className={this.hasError("contactNum")? "form-control is-invalid": "form-control"} name="contactNum" value={this.state.contactNum} onChange={this.handleInputChange} placeholder="Phone Number"/>
                    <div className={this.hasError("contactNum")? "inline-errormsg": "hidden"}>Please enter a value</div>
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className={this.hasError("email")? "form-control is-invalid": "form-control"} name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email"/>
                    <div className={this.hasError("email")? "inline-errormsg": "hidden"}>Please enter a value</div>
                </div>

                <div className="form-group">
                    <label>Additional Information</label>
                    <textarea type="text" className="form-control"  name="info" value={this.state.info} onChange={this.handleInputChange} placeholder="Additional Information" rows="3"/>
                </div>

                <button type="button" className="btn btn-warning btn-block" onClick={this.handleSubmit}>Submit</button>
             </form>
             <div className="redirect-div">
                <span onClick={this.handleCloseModal}>{config.bottomTitle}</span>            
            </div>
            </Modal>
        </div>
        );
    }
  }

export default BookingComponent;