
export const FETCH_CANDIDATE_BEGIN = 'FETCH_CANDIDATE_BEGIN';
export const FETCH_CANDIDATE_SUCCESS = 'FETCH_CANDIDATE_SUCCESS';
export const FETCH_CANDIDATE_FAILURE = 'FETCH_CANDIDATE_FAILURE';
let list;

export const fetchCandidateBegin = () => ({
  type: FETCH_CANDIDATE_BEGIN
});

export const fetchCandidateSuccess = list => ({
  type: FETCH_CANDIDATE_SUCCESS,
  payload: list
});

export const fetchCandidateError = error => ({
  type: FETCH_CANDIDATE_FAILURE,
  payload: { error }
});
export function fetchCandidate() {
  return dispatch => {
    dispatch(fetchCandidateBegin());
    return fetch('http://localhost:3001/data')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCandidateSuccess({ list: json }));
        return list;
      })
      .catch(error => dispatch(fetchCandidateError(error)));
  };
}
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
