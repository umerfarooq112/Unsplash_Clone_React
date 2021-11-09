import {  Route, Redirect } from 'react-router-dom'

import { useContext } from "react";
import AuthContextProvider, {AuthContext}  from '../Context/AuthContext';



const ProtectedRoutes = ({component:Component, ...rest }) => {
    const {isLogin,setToken,isLogedIn,Logout} = useContext(AuthContext)
    const getToken = window.sessionStorage.getItem('token')
    console.log(isLogedIn)
    return ( 
        <Route {...rest} render = { (props) => 
            {
                if(getToken)
                {
                  return  <Component {...props}   />  

                }     
                else 
                {
                    return <Redirect to='/not-allowed'  />
                }
            } } />
     );
}
 
export default ProtectedRoutes;