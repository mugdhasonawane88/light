import {
    FETCH_CANDIDATE_BEGIN,
    FETCH_CANDIDATE_SUCCESS,
    FETCH_CANDIDATE_FAILURE
} from '../actions/fetchCandidateAction';

const initialState = {
    list: {},
    loading: false,
    error: null
};

const fetchCandidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CANDIDATE_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_CANDIDATE_SUCCESS":
            console.log(action);
            return {
                ...state,
                loading: false,
                list: action.data
            };
        case "FETCH_CANDIDATE_FAILURE":
            debugger;
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                list: {}
            };
        default:
            return state;
    }
};
export default fetchCandidateReducer;
