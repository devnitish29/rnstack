import { createActions} from  'reduxsauce'

const { Types, Creators } = createActions({ 
    feedbackRequest:['feedback'],
    feedbackSuccess:['Success'],
    feedbackFailure:['errorMessage']
});


export const FeedbackTypes = Types
export default Creators