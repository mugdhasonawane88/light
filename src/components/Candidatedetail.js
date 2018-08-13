import React from 'react';
import { Component } from 'react';
import Updatecandidatedetail from '../components/Updatecandidatedetail';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '370px',
    transform: 'translate(-50%, -50%)',
    padding: '0'
  }
};


class Candidatedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      candidateDetails: [],
      selectedCandidate: {}
    };
  }
  openModal = (item) => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = (e) => {
    this.setState({ modalIsOpen: false });
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  componentDidMount = () => {
    var self = this;
    fetch('http://localhost:3001/data')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {        
        self.setState({ candidateDetails: json });
      });
  };
  render() {
    console.log("candidateDetails", this.state.candidateDetails);
    return (
      <div className="panel">
        <div className="panelheader">
          <div className="row">
            <label className="col-sm-3 col-form-label">Membership</label>
            <div className="col-sm-9 col-form-label">
              <span className="editCircle float-right" onClick={(e) => {
                e.preventDefault();
                this.openModal()
              }}><i className="fas fa-pencil-alt editIcon"></i></span>
            </div>
          </div>
        </div>
        <div className="panelbody">
          <div className="row">
            <label className="col-sm-3 col-form-label">NICKNAME</label>
            <div className="col-sm-9 col-form-label">
              <p>{this.state.candidateDetails.name}</p>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 col-form-label">EMAIL</label>
            <div className="col-sm-9 col-form-label">
              <p>{this.state.candidateDetails.email}</p>
              {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" /> */}
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}      
        >

          {<Updatecandidatedetail candidateData={this.state.candidateDetails} />}
          {/* <button
            className="btn btn-success margin-l-10 margin-t-15"
            onClick={this.closeModal}
          >
            Cancel
          </button> */}
          {/* <i className="fa fa-times" aria-hidden="true"  onClick={this.closeModal}></i> */}
        </Modal>

      </div>
    );
  }
}

export default Candidatedetail;
