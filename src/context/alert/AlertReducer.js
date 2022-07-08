const AlertReducer = (state, action) => {
    switch (action.type)
    {
        case 'SET_ALERT':
            return action.payload // msg and type
        case 'REMOVE_ALERT':
            return null // initial state
        default:
            return state
    }
}

export default AlertReducer