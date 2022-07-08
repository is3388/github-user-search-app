import {useReducer, createContext} from 'react'
import AlertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const initialState = null // message and error|success|fail
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // set an alert passing in message and type is error|success|fail
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })
        setTimeout(() => 
            dispatch({
                type: 'REMOVE_ALERT'
            }), 3000
        )
    }

    return ( <AlertContext.Provider value={{alert: state, setAlert}}>
        {children}
    </AlertContext.Provider>
    )
}

export default AlertContext