import { useEffect , useRef , useContext } from 'react';
import axios from 'axios';
import  {AuthContext}  from '../../Context/AuthContext';
import { useHistory } from 'react-router';



const Modal = (props) => {

    let history = useHistory()

    const {isLogin,setToken,isLogedIn,Logout,Apptoken} = useContext(AuthContext)
    console.log(window.sessionStorage.getItem('token'));
    const getToken = window.sessionStorage.getItem('token')
    console.log( );
   
    const i = useRef(null)
    
    window.onclick = function(e)
    {
      var modal = window.document.getElementById("myModal");
      if(e.target==modal)
      {   
          modal.style.display = "none";
          document.body.style.overflowY = 'auto'
      }
        
    }

    const login= ()=>
    {
        const user = {UserName:'admin',password:'admin123'}
        const UserName = 'admin'
        const password = 'admin123'
        axios.post(`https://api-erpadmin.jmmtest.xyz/api/Authentication`, {UserName,password} )
        .then(res => {
        //   const persons = res.data;
            // console.log(res.data.userName);
            isLogin(res.data.userName)
            setToken(res.data.token)
            history.push('/dashboard');
           
            // console.log(history)
            // window.location.href='/signup'


        })
        // AuthService.Login('hello')

    }

    return ( 
        <>
            <div className="header-login" id="openModal" ref={i} onClick={props.openModal}>
                        <h4>Log in</h4>
                    </div>
            
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={props.closeModal}>&times;</span>
                            <div className="modal-content-section">
                                <img src="images/tab-icon.png" alt="" />
                                <h1 className="modal-title">Login</h1>
                                <p className="modal-text-p1">To submit a photo, login</p>
                                <button className="modal-button"> <i className="fa fa-facebook btn-icon"></i> Login with
                                    Facebook</button>
                                <p className="modal-text-p2">OR</p>
                                <div className="input-divs">

                                    <p className="email-label">Email</p>
                                    <input type="text" name="email" id="email" className="email-input"/>

                                    <p className="password-label">Password <span className="modal-text-link">Forgot your Password</span>
                                    </p>
                                    <input type="password" name="email" id="email" className="password-input"/>

                                    {!getToken ? <button className="modal-login-btn" onClick={login}>Login</button> :     <button className="modal-login-btn" onClick={Logout}>Logout</button> }
                                    
                                    
                                 
                                </div>
                                <p className="modal-text-p3">Don't have any account? <span className="modal-text-link"> Join</span></p>
                            </div>
                        </div>
                    </div>
        </>
     );
}
 
export default Modal;