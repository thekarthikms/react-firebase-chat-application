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
        case "DEACT":
            return{
                ...state,
                active:false,
                user:{
                    username:"",
                    userid:""
                }
            }
        default: return state
    }
}

export default chatselect