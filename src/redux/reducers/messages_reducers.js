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
        default:return state
    }
}

export default messages