let defaultState = {
    chatlist:false,
    listToggle:false
}

let chatlist = (state=defaultState,action)=>{
    switch(action.type){
        case "LIST ACTIVE":
            return{
                ...state,
                chatlist:true
            }
        case "TOGGLE LIST":
            return{
                ...state,
                listToggle:!state.listToggle
            }
        default:return state
    }

}

export default chatlist