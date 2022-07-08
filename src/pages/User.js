import {useEffect, useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
import {useParams} from 'react-router-dom'

// version 5 passing match as prop, match.params.login
function User () {

    // get the user state and getUser function from context
    const {user, getUser} = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
        
        getUser(params.login)   
    }, [])

    return (
        <div>{user.login}</div>
    )
}

export default User