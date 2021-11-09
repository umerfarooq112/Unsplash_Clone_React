import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <section className="signup">
        <div className="main-div">
            <div className="row">
              
                <div className="col main-img">
                    <div className="content">
                        <div className="logo">
                            <img src="images/tab-icon.png" width="80px" height="auto" alt="" />
                        </div>
                        <div className="text-section">
                            <h1 className="text-title">Creation starts here</h1>
                            <p className="text-details">Access 343,889,10 high resolution photos you can't find anywhere
                                else</p>
                        </div>
                        <div className="footer-text">
                            <p>Uploaded 8 years ago by Lorem ipsum.</p>
                        </div>
                    </div>
                </div>
              
                <div className="col form-section">
                    <div className="container">
                        <h2 className="form-title">Join Unsplash</h2>
                        <p className="form-text-1">Already have an account? <Link to="/" className="text-1-link">Login</Link> </p>
                        <button className="form-join-btn"> <i className="fa fa-facebook"></i> Join Using Facebook </button>
                        <p className="space-text">OR</p>

                        <form action="" className="Input-form" id="SignupForm">
                            <div className="form-section-1 spacing">
                                <div className="group-1">
                                    <label htmlFor="First Name" className="InputLabels">First Name</label>
                                    <input type="text" name="firstName" id="firstName" className="inputs-fields"/>
                                </div>
                                <div className="group-2 ">
                                    <label htmlFor="Last Name" className="InputLabels">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" className="inputs-fields" />
                                </div>
                            </div>
                            <div className="form-section-2 spacing">
                                <label htmlFor="Email" className="InputLabels">Email</label>
                                <input type="email" name="Email" id="email" className="inputs-fields" />
                            </div>
                            <div className="form-section-3 spacing">
                                <label htmlFor="Username" className="InputLabels">Username (only letters,numbers, and
                                    underscores)</label>
                                <input type="text" name="Username" id="Username" className="inputs-fields" />
                            </div>
                            <div className="form-section-4 spacing">
                                <label htmlFor="password" className="InputLabels">Password (min 6 char)</label>
                                <input type="password" name="password" id="password" className="inputs-fields" />
                            </div>

                            <button className="join-btn" type="submit">Join</button>
                        </form>

                        <p className="form-footer-text">By joining you agree to the <a href="#">Terms</a> and <a href="">
                                privacy policy </a> </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Signup;