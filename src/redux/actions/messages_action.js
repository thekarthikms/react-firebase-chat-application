export function setMsg(messages){
    return {
        type:"SET MSG",
        payload:{
            messages
        }
    }
}

export function clrMsg(){
    return {
        type:"CLR MSG"
    }
}