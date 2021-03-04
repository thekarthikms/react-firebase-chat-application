export function selectChat(username,userid){
    return {
        type:"ACTIVATE",
        payload:{
            username,
            userid
        }
    }
}

export function unselectChat(){
    return{
        type:"DEACT"
    }
}