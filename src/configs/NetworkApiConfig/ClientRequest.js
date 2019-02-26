import ApiClient from './ApiRequest';


function postFeedback(feedback){

  return  ApiClient.post("FeedbackUrl", feedback)
    .then(response => {
        if(response.data != null){
            return response.data
        } else{
            return null
        }
    }).catch(error=>{

        return error
    })
}




export  const ApiService ={
    postFeedback
}