const mid = (state = 0,action) =>{
    switch (action.type){
        case 'SET_SHOW_MID':
            return action.id
        case 'SET_HIDE_MID':
            return action.id
        default:
            return state;
    }
}

export default mid