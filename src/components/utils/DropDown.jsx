const DropDownMenu = (props) => {
    return ( 
        <>
           <div className="header-menu-icon" onClick={props.opendropdownMenu}>
                        <i className="fa fa-bars header-bars dropdown-menu"></i>
                        <div id="myDropdown" className="dropdown-content">
                            <div className="content-div">
                                <div className="content-row">
                                    <div className="content-col">
                                        <div className="section-1">
                                            <i className="fa fa-briefcase"></i>
                                            <div className="section-1-content">
                                                <p className="section-1-p-title">Company</p>
                                                <p className="section-1-p-text">About</p>
                                                <p className="section-1-p-text1">Brands</p>
                                                <p className="section-1-p-text1">Blogs</p>
                                                <p className="section-1-p-text1">History</p>
                                                <p className="section-1-p-text1">Join the team</p>
                                                <p className="section-1-p-text1">Press</p>
                                                <p className="section-1-p-text1">Contact Us</p>
                                                <p className="section-1-p-text1">Help</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-col">
                                        <div className="section-1">
                                            <i className="fa fa-users"></i>
                                            <div className="section-1-content">

                                                <p className="section-1-p-title">Community</p>
                                                <p className="section-1-p-text">About</p>
                                                <p className="section-1-p-text1">Brands</p>
                                                <p className="section-1-p-text1">Blogs</p>
                                                <p className="section-1-p-text1">History</p>
                                                <p className="section-1-p-text1">Join the team</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-col">
                                        <div className="section-1">
                                            <i className="fa fa-user"></i>
                                            <div className="section-1-content">
                                                <p className="section-1-p-title">Product</p>
                                                <p className="section-1-p-text">About</p>
                                                <p className="section-1-p-text1">Brands</p>
                                                <p className="section-1-p-text1">Blogs</p>
                                                <p className="section-1-p-text1">Contact Us</p>
                                                <p className="section-1-p-text1">Help</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-footer">
                                <div className="menu-footer-text">
                                    <p>License</p>
                                    <p>privacy policy</p>
                                    <p>Teams</p>
                                    <p>security</p>
                                </div>
                                <div className="menu-footer-icons">
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>   
        </>
     );
}
 
export default DropDownMenu;