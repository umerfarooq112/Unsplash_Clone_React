import { createContext,useState } from 'react'

export const AuthContext = createContext();

function AuthContextProvider(props)
{   
    const [userName,setUserName] = useState('')
    const [Apptoken,setAppToken] = useState('')
    const [isLogedIn,setIsLogedin] = useState(false)

    function isLogin(name)
    {
        setUserName(name)
    }
    function setToken(Apptoken)
    {
        setAppToken(Apptoken)
        window.sessionStorage.setItem('token',Apptoken)
        setIsLogedin(true)
    }

    function Logout()
    {
        window.sessionStorage.clear()
        setAppToken('')
        setUserName('')
        setIsLogedin(false)
        // window.location.href = '/'
    }

    const value ={userName, Apptoken,isLogedIn,Logout ,isLogin,setToken}
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

