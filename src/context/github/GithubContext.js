import { createContext, useReducer } from 'react'
import githubReducer from './GitHubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// GithubProvider should be wrapped all components to get access to the state in App.js 
export const GithubProvider = ({ children }) =>
{
    //const [users, setUsers] = useState([])
    //const [loading, setLoading] = useState(true)

    const initialState = { users: [], loading: false }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //  Get search results
    const searchUsers = async (text) => {
        const params = new URLSearchParams({
            q: text
        })

        setLoading()
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, 
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json() // data.items is an array
        //setUsers(data)
        //setLoading(false)
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // clear users from state
    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    const setLoading = () => {
        dispatch({ type: 'SET_LOADING'})
    }
    
    return <GithubContext.Provider value={{ users: state.users, loading: state.loading , searchUsers, clearUsers }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext