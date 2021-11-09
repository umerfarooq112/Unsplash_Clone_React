import { Link, NavLink } from "react-router-dom";



const NotAllowed = () => {
    return ( 
        <>
            <div className="main-div">
                        <div className='dashboard-content'>
                                
                                <h2>You need to login first to access dashboard page</h2>
                                <div className="dashboard-btn">
                                    <NavLink className='btn-dashbaord ' to='/'>Home</NavLink>
                                </div>
                        </div>
                </div>
        </>
     );
}
 
export default NotAllowed;