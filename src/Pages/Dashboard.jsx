import { useEffect , useRef , useContext } from 'react';
import axios from 'axios';
import {AuthContext}  from '../Context/AuthContext';
import { Link } from 'react-router-dom';

import '../style/dashboard.css'

const Pages = () => {

    const {isLogin,setToken,isLogedIn,Logout} = useContext(AuthContext)
    console.log(isLogedIn);
    return ( <>

                <div className="main-div">
                        <div className='dashboard-content'>
                                
                                <h2>Dashboard page</h2>
                                <Link to='/'>Home</Link>
                                <div className="dashboard-btn">
                                        <button className='btn-dashbaord' onClick={Logout} >Log out</button>
                                </div>
                        </div>
                </div>

        </> );
}
 
export default Pages;