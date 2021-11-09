
import { Redirect, Route, Switch } from 'react-router';

import HomePage from '../Pages/HomePage';
import Dashboard from '../Pages/Dashboard';
import AuthContextProvider, {AuthContext}  from '../Context/AuthContext';
import React ,{useContext} from 'react';
import Signup from '../Pages/Signup';
import ProtectedRoutes from './ProtectedRoutes';
import NotAllowed from '../Pages/NotAllowed';

const NavRoutes = (props) => {
    const {isLogin,setToken,isLogedIn,Logout} = useContext(AuthContext)
    console.log(isLogedIn);
    return ( 
        <Switch>
             <Route path='/signup'    component={ Signup} ></Route> 
             <Route path='/not-allowed'    component={ NotAllowed} ></Route> 
             <ProtectedRoutes path='/dashboard'   component={Dashboard } ></ProtectedRoutes> 
            <Route path='/'   render={ (props) => <HomePage  {...props} />} ></Route>
        </Switch>
     );
}
 
export default (NavRoutes);