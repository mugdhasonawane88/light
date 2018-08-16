import * as ActionType from './ActionTypes'; 

let list;


export function fetchCandidate() {
  return {type: ActionType.FETCH_CANDIDATE_BEGIN};
}

export const fetchCandidateBegin = () => ({
  type: ActionType.FETCH_CANDIDATE_BEGIN
});

export const fetchCandidateSuccess = list => ({
  type: ActionType.FETCH_CANDIDATE_SUCCESS,
  payload: list
});

export const fetchCandidateError = error => ({
  type: ActionType.FETCH_CANDIDATE_FAILURE,
  payload: { error }
});

export const updateCandidate = (payload)=> {
  return {type: ActionType.UPDATE_CANDIDADTE_DETAILS, payload};
}
