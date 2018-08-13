import React from 'react';
import { Component } from 'react';
//import { connect } from 'react-redux';
// import { shipQuantity } from '../../states/actions/shopDetail/shopDetailActions';
// import { fetchCandidate } from '../../states/actions/fetchFarmAction';

class Updatecandidatedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: this.props.candidateData.name,
      candidateEmail: this.props.candidateData.email
    };
  }
  updateName = (event) => {
    this.setState({
      candidateName: event.target.value
    })
  }
  updateEmail = (event) => {
    this.setState({
      candidateEmail: event.target.value
    })
  }
  render() {
    return (
      <div className="updatecandidatedetail">

        <div className="candidateheader">
          <div className="row">
            <label className="col-sm-7 col-form-label">Update Membership</label>
            <div className="col-sm-5 col-form-label">
            <i class="fas fa-times float-right"></i>
            </div>
          </div>
        </div>
        <div className="updateInfo">
          <form>
            <div id="name" className="form-group">
              <p>Nickname</p>
              <input type="text" className="form-control" onChange={this.updateName} value={this.state.candidateName} />
            </div>
            <div id="email" className="form-group">
              <p>Email</p>
              <input type="text" className="form-control" onChange={this.updateEmail.bind(this)} value={this.state.candidateEmail} />
            </div>
            <button type="submit" className="btn btn-primary updateBtn">UPDATE</button>
            <button type="button" className="btn btn-primary cancelBtn">CANCEL</button>
          </form>
        </div>
      </div>
    );
  }
};


// const mapState = (state) => {
//   return {
//     list: state.dashboardreducer.list,
//   };
// };


// const mapStateToProps = (state) => {
//   return {
//     list: state.dashboardreducer.list,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return [
//     {
//       fetchCandidate: () => {
//         dispatch(fetchCandidate())
//       }
//     },
//     {
//       shipQuantity: (totalSoldQuantity, index) => {
//         dispatch(shipQuantity(totalSoldQuantity, index))
//       }
//     }
//   ]
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Updatecandidatedetail);
//export default connect(mapState)(Updatecandidatedetail);
export default Updatecandidatedetail;
