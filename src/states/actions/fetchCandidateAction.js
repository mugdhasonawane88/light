import * as ActionType from './ActionTypes'; 

let list;


export function fetchCandidateBegin() {
  return {type: ActionType.FETCH_CANDIDATE_BEGIN};
}

export const updateCandidate = (payload)=> {
  return {type: ActionType.UPDATE_CANDIDADTE_BEGIN, payload};
}
