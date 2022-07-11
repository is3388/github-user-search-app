import { createContext, useReducer } from 'react'
import githubReducer from './GitHubReducer'

const GithubContext = createContext()

// GithubProvider should be wrapped all components to get access to the state in App.js 
export const GithubProvider = ({ children }) =>
{
    //const [users, setUsers] = useState([])
    //const [loading, setLoading] = useState(true)
    // initialState include an array of users, specific user and loading state
    const initialState = { users: [], user: {}, repos: [], loading: false }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //return <GithubContext.Provider value={{ users: state.users, user: state.user, repos: state.repos, loading: state.loading , searchUsers, getUser, getRepos, clearUsers }}>
    return <GithubContext.Provider value={{ ...state, dispatch }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext