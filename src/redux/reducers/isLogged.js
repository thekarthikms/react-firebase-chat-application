


const defaultState = {
    isLogged:true
}

let isLogged = (state = defaultState,action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                isLogged:!state.isLogged
            }
        default:
            return state
    }
}


export default isLogged