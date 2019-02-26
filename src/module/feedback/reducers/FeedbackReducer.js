import {FeedbackTypes} from '../actions/FeedbackAction';
import { createReducer } from 'reduxsauce';


const INITIAL_STATE = {
    success:null,
    failure:null
}


export const feedbackSuccess = (state , { response}) =>{

    state.merge({
        success:response,
        failure:null
    })
}


export const feedbackFailure = (state , { error}) =>{

    state.merge({
        success:null,
        failure:error
    })
}


export const reducer = createReducer(INITIAL_STATE,{
    [FeedbackTypes.FEEDBACK_SUCCESS]:feedbackSuccess,
    [FeedbackTypes.FEEDBACK_FAILURE]:feedbackFailure
})