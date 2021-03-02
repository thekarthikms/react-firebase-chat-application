let defaultState = {
    messageListToggle:true
}

let messagelist = (state=defaultState,action)=>{
    switch(action.type){
        case "MSG TOG":
            return {
                ...state,
                messageListToggle:!state.messageListToggle
            }
        default:return state
    }

}

export default messagelist