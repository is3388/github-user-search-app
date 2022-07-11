    import axios from 'axios'
    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
    const github = axios.create({
        baseURL: GITHUB_URL,
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    //  Get search results
    export const searchUsers = async (text) => {
        
        const params = new URLSearchParams({
            q: text
        })

        /*const response = await fetch(`${GITHUB_URL}/search/users?${params}`, 
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })*/
        const response = await github.get(`/search/users?${params}`)
        //const {items} = await response.json() // data.items is an array
        return response.data.items
    }

        // get specific user and user repos
        export const getUserAndRepos = async (login) => {
            // use Promise.all for passing multiple requests
            const [user, repos] = await Promise.all([
              github.get(`/users/${login}`),
              github.get(`/users/${login}/repos`),
            ])
          
            return { user: user.data, repos: repos.data }
          }
    

