export function userlogin(username,userid){
    return {
        type:'LOG IN',
        payload:{
            username,
            userid
        }
    }
}

export function userlogout(){
    return {
        type:'LOG OUT',
    }
}

