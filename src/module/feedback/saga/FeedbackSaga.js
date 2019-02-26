import { put, call } from 'redux-saga/effects'
import {FeedbackActionTypes} from '../actions/FeedbackAction';
import ApiService from '../../../configs/NetworkApiConfig/ClientRequest';


export function* sendFeedback(feedbackdata){

    const response = yield call(ApiService.postFeedback(feedbackdata));

    if(response){
        yield put(FeedbackAction.feedbackSuccess(response))
    } else {
        yield put(FeedbackAction.feedbackFailure(response))
    }
}