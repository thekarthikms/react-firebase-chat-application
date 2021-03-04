let defaultState ={
    isMessage:false,
    messages:[]
}

let messages = (state=defaultState,action)=>{
    switch(action.type){
        case "SET MSG":
            return {
                ...state,
                isMessage:true,
                messages:action.payload.messages
            }
        case "CLR MSG":{
           
            return {
                ...state,
                isMessage:false,
                messages:[]
            }
        }
        default:return state
    }
}

export default messages