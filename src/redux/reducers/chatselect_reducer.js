const defaultState = {
    active:false,
    user:{
        username:"",
        userid:""
    }
}

let chatselect = (state=defaultState,action)=>{
    switch(action.type){
        case "ACTIVATE":
            return {
                ...state,
                active:true,
                user:{
                    username:action.payload.username,
                    userid:action.payload.userid
                }
            }
        default: return state
    }
}

export default chatselect