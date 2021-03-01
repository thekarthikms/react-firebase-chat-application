


const defaultState = {
    isLogged:false,
    user : {
        username:"",
        userid:""
    }
}

let userlog = (state = defaultState,action)=>{
    switch(action.type){
        case "LOG IN":
            return {
                ...state,
                isLogged:!state.isLogged,
                user:{
                    username:action.payload.username,
                    userid:action.payload.userid
                }
            }
        case "LOG OUT":
            return {
                ...state,
                isLogged:!state.isLogged,
                user : {
                    username:"",
                    userid:""
                }
            }
        default:
            return state
    }
}


export default userlog