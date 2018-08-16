import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Updatecandidatedetail from '../components/Updatecandidatedetail';
import Modal from "react-modal";
import { connect } from 'react-redux';
import { fetchCandidateBegin, updateCandidate } from '../states/actions/fetchCandidateAction';
import { bindActionCreators } from 'redux';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "32%",
    border: "none",
    padding:"0",
    margin:"0" 
  }
};


class Candidatedetail extends Component {


  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      candidateDetails: {},
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

  componentDidMount() {
    this.props.fetchCandidateBegin();
  }
  render() {
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
              {console.log("aaa", this.props.candidateDetails)}

              <p>{this.props.candidateDetails.name}</p>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 col-form-label">EMAIL</label>
            <div className="col-sm-9 col-form-label">
              <p>{this.props.candidateDetails.email}</p>
              {/* <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" /> */}
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          {<Updatecandidatedetail candidateData={this.props.candidateDetails} closeModal={this.closeModal.bind(this)} onSubmit={this.props.updateCandidate} />}
        </Modal>
      </div>
    );
  }

}
Candidatedetail.propTypes = {
  fetchCandidateBegin: PropTypes.func.isRequired,
  candidateDetails: PropTypes.object,
  updateCandidate: PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    candidateDetails: state.fetchCandidateReducer.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCandidateBegin, updateCandidate }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Candidatedetail);

