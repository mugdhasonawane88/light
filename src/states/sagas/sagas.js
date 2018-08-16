import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../actions/ActionTypes';
import Api from '../../states/api/services'

export default function* appSaga(){
    yield all([
        takeEvery(ActionTypes.FETCH_CANDIDATE_BEGIN, fetchCandidatedetails),
        takeEvery(ActionTypes.UPDATE_CANDIDADTE_BEGIN, updateCandidatedetails)
    ])
}
 
export function* fetchCandidatedetails(){
    try { 
        const data = yield call(Api.fetchUser) 
        yield put({type:  ActionTypes.FETCH_CANDIDATE_SUCCESS, data}) 
    } 
    catch (error) { 
        yield put({type: ActionTypes.FETCH_CANDIDATE_FAILURE, error}) 
    }
}

export function* updateCandidatedetails(payload){   
    try { 
        const data = yield call(Api.updateCandidate, payload) 
        yield put({type:  ActionTypes.FETCH_CANDIDATE_SUCCESS, data}) 
    } 
    catch (error) { 
        yield put({type: ActionTypes.FETCH_CANDIDATE_FAILURE, error}) 
    }
}


