export function setMsg(messages){
    return {
        type:"SET MSG",
        payload:{
            messages
        }
    }
}