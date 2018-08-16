import React from 'react';
import { Component } from 'react';

class Updatecandidatedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: this.props.candidateData.name,
      candidateEmail: this.props.candidateData.email,
      errormsg: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  updateName = (event) => {
    this.setState({
      candidateName: event.target.value,
      errormsg: false
    });   
  }
  updateEmail = (event) => {
    this.setState({
      candidateEmail: event.target.value,
      errormsg: false 
    })  
  }
  render() {
    return (
      <div className="updatecandidatedetail">

        <div className="candidateheader">
          <div className="row">
            <label className="col-sm-7 col-form-label">Update Membership</label>
            <div className="col-sm-5 col-form-label">
              <span onClick={this.props.closeModal}>
                <i className="fas fa-times float-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="updateInfo">
          <form>
            <div id="name" className="form-group">
              <p>Nickname</p>
              <input type="text" className="form-control" onChange={this.updateName} value={this.state.candidateName} required />

            </div>
            <div id="email" className="form-group">
              <p>Email</p>
              <input type="text" className="form-control" onChange={this.updateEmail.bind(this)} value={this.state.candidateEmail} />

            </div>
            <div className="validateError">{this.state.errormsg ? 'Please enter valid name & email address.' : null}</div>
            <button type="button" disabled={this.state.errormsg} id="updateButton" onClick={this.handleSubmit} className="btn btn-primary updateBtn"> UPDATE </button>
            <button type="button" className="btn btn-primary cancelBtn" onClick={this.props.closeModal}>CANCEL</button>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit(e, name, email) {    
    e.preventDefault();
    if (!this.validateForm()) {      
      this.setState({ errormsg: true });    
      //document.getElementById("updateButton").disabled = true;  
      return;
    }  
    //document.getElementById("updateButton").disabled = false; 
    this.props.closeModal();
    let payload = {
      "name": this.state.candidateName,
      "email": this.state.candidateEmail
    }
    this.props.onSubmit(payload);
    // return false;
  }
  validateForm() {
    return this.state.candidateName.length > 0 && this.state.candidateEmail.length > 5 && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.state.candidateEmail);
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

export default Updatecandidatedetail;
